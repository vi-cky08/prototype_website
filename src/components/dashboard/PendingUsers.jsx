
import { useEffect, useState } from "react";
import {
  getPendingUsers,
  approveUser,
  rejectUser,
} from "../../api/userManagementApi";

export default function PendingUsers() {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const loadUsers = async () => {
    try {
      setError("");
      const result = await getPendingUsers();
      setUsers(result.users || []);
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Unable to load registration requests."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleApprove = async (userId) => {
    const role = roles[userId];

    if (!role) {
      setError("Please select Engineer or Client first.");
      return;
    }

    try {
      const result = await approveUser(userId, role);
      setMessage(result.message);
      setError("");
      await loadUsers();
    } catch (err) {
      setError(
        err.response?.data?.message || "Approval failed."
      );
    }
  };

  const handleReject = async (userId) => {

  const reason = window.prompt(
    "Enter reason for rejection:"
  );

  if (!reason?.trim()) return;

  try {
    const result = await rejectUser(userId, reason);

    setMessage(result.message);
    setError("");

    await loadUsers();

  } catch (err) {
    setError(
      err.response?.data?.message ||
      "Rejection failed."
    );
  }
};

  if (loading) {
    return <p className="p-6">Loading registrations...</p>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Pending User Registrations
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Review requests and assign the appropriate role.
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

      <div className="overflow-x-auto rounded-xl border bg-white">
        <table className="w-full min-w-[750px] text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Registered</th>
              <th className="p-4">Assign Role</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id}>
                  <td className="p-4 font-medium">
                    {user.fullName}
                  </td>

                  <td className="p-4">{user.email}</td>

                  <td className="p-4">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <select
                      value={roles[user._id] || ""}
                      onChange={(e) =>
                        setRoles((prev) => ({
                          ...prev,
                          [user._id]: e.target.value,
                        }))
                      }
                      className="rounded-lg border border-slate-300 p-2"
                    >
                      <option value="">Select role</option>
                      <option value="engineer">Engineer</option>
                      <option value="client">Client</option>
                    </select>
                  </td>

                  <td className="p-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleApprove(user._id)}
                        className="rounded-lg bg-green-600 px-3 py-2 text-white hover:bg-green-700"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() => handleReject(user._id)}
                        className="rounded-lg bg-red-600 px-3 py-2 text-white hover:bg-red-700"
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-8 text-center text-slate-500">
                  No pending registrations.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
