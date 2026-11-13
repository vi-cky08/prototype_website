import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
  maxAge: 24 * 60 * 60 * 1000,
};

const createToken = (user) => {
  return jwt.sign(
    {
      userId: user._id.toString(),
      purpose: "login",
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "1d",
    }
  );
};

// USER SIGNUP
export const signup = async (req, res) => {
  try {
    const { fullName, email, password, mobile } = req.body;

    if (!fullName?.trim() || !email?.trim() || !password) {
      return res.status(400).json({
        message: "Please fill all required fields.",
      });
    }

    if (password.length < 8 || password.length > 72) {
      return res.status(400).json({
        message: "Password must be 8 to 72 characters.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await User.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Email is already registered.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      fullName: fullName.trim(),
      email: normalizedEmail,
      mobile: mobile || "",
      password: hashedPassword,

      // User cannot assign own role
      role: null,

      status: "pending",
      isActive: true,
    });

    // Temporary token only for approval notifications
    const notificationToken = jwt.sign(
      {
        userId: user._id.toString(),
        purpose: "approval-notification",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );

    // Notify connected admins
    const io = req.app.get("io");

    io.to("admins").emit("new-registration", {
      message: "A new user is waiting for approval.",
      user: {
        id: user._id,
        fullName: user.fullName,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Registration submitted. Please wait for admin approval.",

      notificationToken,

      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        status: user.status,
      },
    });

  } catch (error) {

    if (error.code === 11000) {
      return res.status(409).json({
        message: "Email is already registered.",
      });
    }

    console.error("Signup error:", error);

    return res.status(500).json({
      message: "Unable to register account.",
    });
  }
};

// LOGIN FOR ALL APPROVED ROLES
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
      });
    }

    const user = await User.findOne({
      email: email.trim().toLowerCase(),
    }).select("+password");

    if (
      !user ||
      !(await bcrypt.compare(password, user.password))
    ) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    if (user.status === "pending") {
      return res.status(403).json({
        code: "ACCOUNT_PENDING",
        message: "Your account is waiting for admin approval.",
      });
    }

    if (user.status === "rejected") {
      return res.status(403).json({
        code: "ACCOUNT_REJECTED",
        message: user.rejectionReason ||
          "Your registration was rejected.",
      });
    }

    if (user.status === "suspended" || !user.isActive) {
      return res.status(403).json({
        code: "ACCOUNT_SUSPENDED",
        message: "Your account is suspended.",
      });
    }

    if (!user.role) {
      return res.status(403).json({
        message: "Your account does not have an assigned role.",
      });
    }

    const token = createToken(user);

    res.cookie("token", token, cookieOptions);

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Server error during login.",
    });
  }
};

// CURRENT USER
export const getMe = async (req, res) => {
  return res.json({
    success: true,
    user: {
      id: req.user._id,
      fullName: req.user.fullName,
      email: req.user.email,
      role: req.user.role,
      status: req.user.status,
    },
  });
};

// LOGOUT
export const logout = (req, res) => {

  res.clearCookie("token", cookieOptions);

  return res.json({
    success: true,
    message: "Logged out successfully.",
  });
};