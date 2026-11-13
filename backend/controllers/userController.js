import mongoose from "mongoose";
import User from "../models/User.js";

// GET PENDING USERS
export const getPendingUsers = async (req, res) => {
  try {
    const users = await User.find({
      status: "pending",
      role: null,
    })
      .select("fullName email mobile status createdAt")
      .sort({ createdAt: -1 });

    return res.json({
      success: true,
      users,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Unable to load pending users.",
    });
  }
};

// APPROVE USER
export const approveUser = async (req, res) => {
  try {
    const { role } = req.body;
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        message: "Invalid user ID.",
      });
    }

    if (!["client", "engineer"].includes(role)) {
      return res.status(400).json({
        message: "Select client or engineer.",
      });
    }

    const user = await User.findOneAndUpdate(
      {
        _id: id,
        status: "pending",
        role: null,
      },
      {
        $set: {
          role,
          status: "approved",
          isActive: true,
          approvedBy: req.user._id,
          approvedAt: new Date(),
          rejectionReason: "",
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!user) {
      return res.status(404).json({
        message: "Pending registration not found.",
      });
    }

    const io = req.app.get("io");

    io.to(`user:${user._id}`).emit("account-approved", {
      message: `Your account has been approved as ${role}. You can now login.`,
      role,
    });

    return res.json({
      success: true,
      message: `${user.fullName} approved as ${role}.`,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        status: user.status,
      },
    });

  } catch (error) {
    console.error("Approve error:", error);

    return res.status(500).json({
      message: "Unable to approve user.",
    });
  }
};

// REJECT USER
export const rejectUser = async (req, res) => {
  try {
    const { reason } = req.body;

    const user = await User.findOneAndUpdate(
      {
        _id: req.params.id,
        status: "pending",
        role: null,
      },
      {
        $set: {
          status: "rejected",
          isActive: false,
          rejectionReason: reason?.trim() || "Registration not approved.",
        },
      },
      {
        new: true,
      }
    );

    if (!user) {
      return res.status(404).json({
        message: "Pending user not found.",
      });
    }

    const io = req.app.get("io");

    io.to(`user:${user._id}`).emit("account-rejected", {
      message: user.rejectionReason,
    });

    return res.json({
      success: true,
      message: "Registration rejected successfully.",
    });

  } catch (error) {
    return res.status(500).json({
      message: "Unable to reject user.",
    });
  }
};