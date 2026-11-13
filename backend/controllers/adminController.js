import bcrypt from "bcryptjs";
import User from "../models/User.js";

// CREATE ADMIN
export const createAdmin = async (req, res) => {
  try {
    const { fullName, email, password, mobile } = req.body;

    if (!fullName?.trim() || !email?.trim() || !password) {
      return res.status(400).json({
        message: "Name, email and password are required.",
      });
    }

    if (password.length < 12 || password.length > 72) {
      return res.status(400).json({
        message: "Admin password must be 12 to 72 characters.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await User.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Email already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const admin = await User.create({
      fullName: fullName.trim(),
      email: normalizedEmail,
      mobile: mobile || "",
      password: hashedPassword,
      role: "admin",
      status: "approved",
      isActive: true,
      createdBy: req.user._id,
    });

    return res.status(201).json({
      success: true,
      message: "Admin created successfully.",
      admin: {
        id: admin._id,
        fullName: admin.fullName,
        email: admin.email,
        role: admin.role,
        status: admin.status,
      },
    });

  } catch (error) {
    console.error("Create admin error:", error);

    return res.status(500).json({
      message: "Unable to create admin.",
    });
  }
};

// VIEW ALL ADMINS
export const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({
      role: "admin",
    }).select("fullName email mobile status isActive createdAt");

    return res.json({
      success: true,
      admins,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Unable to load admins.",
    });
  }
};

// DEACTIVATE ADMIN
export const deactivateAdmin = async (req, res) => {
  try {
    const admin = await User.findOneAndUpdate(
      {
        _id: req.params.id,
        role: "admin",
      },
      {
        $set: {
          isActive: false,
          status: "suspended",
        },
      },
      {
        new: true,
      }
    );

    if (!admin) {
      return res.status(404).json({
        message: "Admin not found.",
      });
    }

    return res.json({
      success: true,
      message: "Admin deactivated successfully.",
    });

  } catch (error) {
    return res.status(500).json({
      message: "Unable to deactivate admin.",
    });
  }
};