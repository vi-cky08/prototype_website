
import { useEffect, useState } from "react";
import {
  UserRound,
  Wrench,
  UserCheck,
  UserX,
} from "lucide-react";

import StatCard from "../../components/dashboard/StatCard";
import { getAdminDashboard } from "../../api/dashboardApi";

export default function AdminDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const result = await getAdminDashboard();
        setData(result);
      } catch (err) {
        setError(
          err.response?.data?.message ||
          "Unable to load admin dashboard."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return <p className="p-6 text-slate-600">Loading dashboard...</p>;
  }

  if (error) {
    return <p className="rounded-lg bg-red-50 p-4 text-red-600">{error}</p>;
  }

  const stats = data?.stats || {};

  const cards = [
    {
      title: "Total Clients",
      value: stats.totalClients,
      icon: UserRound,
      description: "Registered clients",
    },
    {
      title: "Total Engineers",
      value: stats.totalEngineers,
      icon: Wrench,
      description: "Registered engineers",
    },
    {
      title: "Active Users",
      value: stats.activeUsers,
      icon: UserCheck,
      description: "Active client and engineer accounts",
    },
    {
      title: "Inactive Users",
      value: stats.inactiveUsers,
      icon: UserX,
      description: "Inactive client and engineer accounts",
    },
  ];

  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Admin Overview
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage and monitor your platform's users.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <StatCard key={card.title} {...card} />
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="border-b border-slate-200 px-5 py-4">
          <h2 className="font-bold text-slate-800">
            Recent Client and Engineer Registrations
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Email</th>
                <th className="px-5 py-3">Role</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {data?.recentUsers?.length ? (
                data.recentUsers.map((user) => (
                  <tr key={user._id}>
                    <td className="px-5 py-4 font-medium text-slate-800">
                      {user.fullName}
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      {user.email}
                    </td>
                    <td className="px-5 py-4 capitalize">
                      {user.role}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          user.isActive
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-700"
                        }`}
                      >
                        {user.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-5 py-8 text-center text-slate-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
