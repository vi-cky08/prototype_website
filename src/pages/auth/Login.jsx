import authBackground from "../../assets/Hexag-bg.png";

import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
} from "lucide-react";

import { loginUser } from "../../api/authApi";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const { setUser } = useAuth();

  const [formData, setFormData] = useState({
    email: location.state?.email || "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const response = await loginUser(formData);

      const user = response.user;

      if (!user || !user.role) {
        throw new Error("Invalid user information received.");
      }

      // Store user information in React context.
      // JWT remains inside the HttpOnly cookie.
      setUser(user);

      // Redirect according to verified backend role.
      switch (user.role.toLowerCase()) {

        case "superadmin":
          navigate("/super-admin/dashboard", {
            replace: true,
          });
          break;

        case "admin":
          navigate("/admin/dashboard", {
            replace: true,
          });
          break;

        case "client":
          navigate("/client/dashboard", {
            replace: true,
          });
          break;

        case "engineer":
          navigate("/engineer/dashboard", {
            replace: true,
          });
          break;

        default:
          setUser(null);
          setError("Invalid user role.");
      }

    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.message ||
        "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-slate-300 py-3 pl-11 pr-12 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-slate-100 px-4 py-12"
    style={{
        backgroundImage: `url(${authBackground})`,
    }}
    >

      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">

        {/* Heading */}
        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold text-[#102f62]">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Login to your Prototype Design account.
          </p>

        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Email Address *
            </label>

            <div className="relative">

              <Mail className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                autoComplete="email"
                className={inputClass}
              />

            </div>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Password *
            </label>

            <div className="relative">

              <Lock className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                autoComplete="current-password"
                className={inputClass}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-slate-400"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>

            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Login */}
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#102f62] py-3.5 font-semibold text-white transition hover:bg-blue-900 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}

            {!loading && <ArrowRight size={18} />}
          </button>

        </form>

        {/* Signup Link */}
        <div className="mt-7 border-t border-slate-200 pt-6 text-center">

          <p className="text-sm text-slate-600">
            Don't have an account?{" "}

            <Link
              to="/signup"
              className="font-bold text-blue-700 hover:underline"
            >
              Create Account
            </Link>
          </p>

        </div>

      </div>

    </main>
  );
}
