
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  LogOut,
  BriefcaseBusiness,
} from "lucide-react";

import { logoutUser } from "../../api/authApi";
import { useAuth } from "../../context/AuthContext";

export default function DashboardLayout({ role }) {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const isSuperAdmin = role === "superadmin";

  const menuItems = [
    {
      title: "Dashboard",
      path: isSuperAdmin
        ? "/super-admin/dashboard"
        : "/admin/dashboard",
      icon: LayoutDashboard,
    },
    ...(isSuperAdmin
      ? [
          {
            title: "Manage Admins",
            path: "/super-admin/admins",
            icon: ShieldCheck,
          },
        ]
      : []),
    {
      title: "Users",
      path: isSuperAdmin
        ? "/super-admin/users"
        : "/admin/users",
      icon: Users,
    },
  ];

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setUser(null);
      navigate("/login", { replace: true });
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col bg-[#102f62] text-white">
        <div className="border-b border-white/10 px-6 py-6">
          <h1 className="text-xl font-bold">
            Prototype Design
          </h1>
          <p className="mt-1 text-xs text-blue-200">
            {isSuperAdmin ? "Super Admin Panel" : "Admin Panel"}
          </p>
        </div>

        <nav className="flex-1 space-y-2 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition ${
                    isActive
                      ? "bg-white text-[#102f62] font-semibold"
                      : "text-blue-100 hover:bg-white/10"
                  }`
                }
              >
                <Icon size={19} />
                {item.title}
              </NavLink>
            );
          })}
        </nav>

        <button
          onClick={handleLogout}
          className="m-4 flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-white transition hover:bg-red-500"
        >
          <LogOut size={19} />
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="min-w-0 flex-1">
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
          <h2 className="font-semibold text-slate-800">
            {isSuperAdmin ? "Super Admin Dashboard" : "Admin Dashboard"}
          </h2>

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
            {isSuperAdmin ? "Super Admin" : "Admin"}
          </span>
        </header>

        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
