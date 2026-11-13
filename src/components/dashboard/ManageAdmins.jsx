import { useEffect, useState } from "react";

import {
  createAdmin,
  getAdmins,
  deactivateAdmin,
} from "../../api/adminManagementApi";

export default function ManageAdmins() {

  const [admins, setAdmins] = useState([]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobile: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const loadAdmins = async () => {
    try {
      const response = await getAdmins();
      setAdmins(response.admins || []);
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Unable to load admins."
      );
    }
  };

  useEffect(() => {
    loadAdmins();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await createAdmin(formData);

      setMessage(response.message);

      setFormData({
        fullName: "",
        email: "",
        password: "",
        mobile: "",
      });

      await loadAdmins();

    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Unable to create Admin."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDeactivate = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to deactivate this Admin?"
    );

    if (!confirmed) return;

    try {
      const response = await deactivateAdmin(id);

      setMessage(response.message);

      await loadAdmins();

    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Unable to deactivate Admin."
      );
    }
  };

  return (
    <div className="space-y-7">

      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Manage Administrators
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Create and manage website Admin accounts.
        </p>
      </div>

      {message && (
        <p className="rounded-lg bg-green-50 p-3 text-green-700">
          {message}
        </p>
      )}

      {error && (
        <p className="rounded-lg bg-red-50 p-3 text-red-600">
          {error}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 rounded-xl border bg-white p-6 md:grid-cols-2"
      >

        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Admin full name"
          required
          className="rounded-lg border p-3"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Admin email"
          required
          className="rounded-lg border p-3"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Temporary password (12+ characters)"
          minLength={12}
          maxLength={72}
          required
          className="rounded-lg border p-3"
        />

        <input
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Mobile number"
          className="rounded-lg border p-3"
        />

        <button
          disabled={loading}
          className="rounded-lg bg-[#102f62] px-5 py-3 font-semibold text-white disabled:opacity-60 md:col-span-2"
        >
          {loading ? "Creating..." : "Create Admin"}
        </button>

      </form>

      <div className="overflow-x-auto rounded-xl border bg-white">

        <table className="w-full min-w-[600px] text-left text-sm">

          <thead className="bg-slate-50">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y">

            {admins.map((admin) => (
              <tr key={admin._id}>

                <td className="p-4">
                  {admin.fullName}
                </td>

                <td className="p-4">
                  {admin.email}
                </td>

                <td className="p-4">
                  {admin.isActive ? "Active" : "Inactive"}
                </td>

                <td className="p-4">
                  {admin.isActive && (
                    <button
                      onClick={() => handleDeactivate(admin._id)}
                      className="rounded-lg bg-red-600 px-3 py-2 text-white"
                    >
                      Deactivate
                    </button>
                  )}
                </td>

              </tr>
            ))}

            {admins.length === 0 && (
              <tr>
                <td colSpan="4" className="p-6 text-center text-slate-500">
                  No administrators found.
                </td>
              </tr>
            )}

          </tbody>
        </table>

      </div>

    </div>
  );
}