import User from "../models/User.js";

export const getSuperAdminDashboard = async (req, res) => {
  try {
    const [
      totalUsers,
      totalAdmins,
      totalClients,
      totalEngineers,
      pendingUsers,
      activeUsers,
      inactiveUsers,
    ] = await Promise.all([
      User.countDocuments({
        role: { $in: ["client", "engineer"] },
      }),

      User.countDocuments({ role: "admin" }),

      User.countDocuments({ role: "client" }),

      User.countDocuments({ role: "engineer" }),

      User.countDocuments({ status: "pending" }),

      User.countDocuments({ isActive: true }),

      User.countDocuments({ isActive: false }),
    ]);

    return res.json({
      success: true,

      stats: {
        totalUsers,
        totalAdmins,
        totalClients,
        totalEngineers,
        pendingUsers,
        activeUsers,
        inactiveUsers,
      },
    });

  } catch (error) {
    return res.status(500).json({
      message: "Unable to load Super Admin dashboard.",
    });
  }
};

export const getAdminDashboard = async (req, res) => {
  try {
    const [
      totalClients,
      totalEngineers,
      pendingUsers,
      activeUsers,
      inactiveUsers,
    ] = await Promise.all([
      User.countDocuments({ role: "client" }),

      User.countDocuments({ role: "engineer" }),

      User.countDocuments({ status: "pending" }),

      User.countDocuments({
        role: { $in: ["client", "engineer"] },
        status: "approved",
        isActive: true,
      }),

      User.countDocuments({
        role: { $in: ["client", "engineer"] },
        isActive: false,
      }),
    ]);

    return res.json({
      success: true,

      stats: {
        totalClients,
        totalEngineers,
        pendingUsers,
        activeUsers,
        inactiveUsers,
      },
    });

  } catch (error) {
    return res.status(500).json({
      message: "Unable to load Admin dashboard.",
    });
  }
};