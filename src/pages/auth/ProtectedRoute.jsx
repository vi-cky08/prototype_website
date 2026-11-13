import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ allowedRoles }) {

  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Checking authentication...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const role = user.role?.toLowerCase();

  if (!allowedRoles.includes(role)) {

    const routes = {
      superadmin: "/super-admin/dashboard",
      admin: "/admin/dashboard",
      client: "/client/dashboard",
      engineer: "/engineer/dashboard",
    };

    return (
      <Navigate
        to={routes[role] || "/login"}
        replace
      />
    );
  }

  return <Outlet />;
}