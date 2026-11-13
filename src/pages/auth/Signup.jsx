import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  User,
  Mail,
  Lock,
  Phone,
  ArrowRight,
} from "lucide-react";

import { signupUser } from "../../api/authApi";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (
      formData.password.length < 8 ||
      formData.password.length > 72
    ) {
      setError("Password must be 8 to 72 characters.");
      return;
    }

    try {
      setLoading(true);

      const { confirmPassword, ...userData } = formData;

      const response = await signupUser(userData);

      // Store short-lived notification token only
      sessionStorage.setItem(
        "approvalNotificationToken",
        response.notificationToken
      );

      navigate("/pending-approval", {
        replace: true,
      });

    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Unable to create account."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">

      <div className="w-full max-w-lg rounded-2xl bg-white p-7 shadow-lg">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#102f62]">
            Create Your Account
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Register and wait for account approval.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Full Name
            </label>

            <div className="relative">
              <User className="absolute left-3 top-3.5 text-slate-400" />

              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                required
                maxLength={80}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Email
            </label>

            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-slate-400" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Mobile
            </label>

            <div className="relative">
              <Phone className="absolute left-3 top-3.5 text-slate-400" />

              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter mobile number"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Password
            </label>

            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-slate-400" />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Minimum 8 characters"
                required
                minLength={8}
                maxLength={72}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Confirm Password
            </label>

            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-slate-400" />

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                required
                className={inputClass}
              />
            </div>
          </div>

          {error && (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#102f62] py-3.5 font-semibold text-white hover:bg-blue-900 disabled:opacity-60"
          >
            {loading ? "Registering..." : "Create Account"}

            {!loading && <ArrowRight size={18} />}
          </button>

        </form>

        <div className="mt-7 text-center text-sm text-slate-600">
          Already registered?{" "}
          <Link to="/login" className="font-bold text-blue-700">
            Login
          </Link>
        </div>

      </div>
    </main>
  );
}