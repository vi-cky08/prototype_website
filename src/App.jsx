import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import DashboardLayout from "./components/dashboard/DashboardLayout.jsx";

import Home from "./pages/Home.jsx";
import WhyChooseUs from "./pages/WhyChooseUs.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Projects from "./pages/Projects.jsx";
import Pricing from "./pages/Pricing.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

import Signup from "./pages/auth/Signup.jsx";
import Login from "./pages/auth/Login.jsx";
import PendingApproval from "./pages/auth/PendingApproval.jsx";
import ProtectedRoute from "./pages/auth/ProtectedRoute.jsx";

import SuperAdminDashboard from "./components/dashboard/SuperAdminDashboard.jsx";
import AdminDashboard from "./components/dashboard/AdminDashboard.jsx";
import PendingUsers from "./components/dashboard/PendingUsers.jsx";
import ManageAdmins from "./components/dashboard/ManageAdmins.jsx";

// import ClientDashboard from "./components/dashboard/ClientDashboard.jsx";

// import EngineerDashboard from "./components/dashboard/EngineerDashboard.jsx";

export default function App() {

  return (
    <Routes>

      {/* Authentication */}
      <Route path="/signup" element={<Signup />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/pending-approval"
        element={<PendingApproval />}
      />

      {/* SUPER ADMIN */}
      <Route element={<ProtectedRoute allowedRoles={["superadmin"]} />}>

        <Route
          path="/super-admin"
          element={<DashboardLayout role="superadmin" />}
        >
          <Route
            index
            element={<Navigate to="dashboard" replace />}
          />

          <Route
            path="dashboard"
            element={<SuperAdminDashboard />}
          />

          <Route
            path="admins"
            element={<ManageAdmins />}
          />

        </Route>

      </Route>

      {/* ADMIN */}
      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>

        <Route
          path="/admin"
          element={<DashboardLayout role="admin" />}
        >
          <Route
            index
            element={<Navigate to="dashboard" replace />}
          />

          <Route
            path="dashboard"
            element={<AdminDashboard />}
          />

          <Route
            path="users"
            element={<PendingUsers />}
          />

        </Route>

      </Route>

      {/* CLIENT */}
      {/* <Route element={<ProtectedRoute allowedRoles={["client"]} />}>
        <Route
          path="/client/dashboard"
          element={<ClientDashboard />}
        />
      </Route> */}

      {/* ENGINEER */}
      {/* <Route element={<ProtectedRoute allowedRoles={["engineer"]} />}>
        <Route
          path="/engineer/dashboard"
          element={<EngineerDashboard />}
        />
      </Route> */}

      {/* MAIN WEBSITE */}
      <Route element={<Layout />}>

        <Route
          index
          element={<Navigate to="/home" replace />}
        />

        <Route path="/home" element={<Home />} />

        <Route
          path="/why-choose-us"
          element={<WhyChooseUs />}
        />

        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/pricing" element={<Pricing />} />

        <Route path="/contact" element={<Contact />} />

      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}