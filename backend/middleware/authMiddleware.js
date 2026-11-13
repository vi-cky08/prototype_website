import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        message: "Please login first.",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    if (decoded.purpose !== "login") {
      return res.status(401).json({
        message: "Invalid authentication token.",
      });
    }

    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({
        message: "User account not found.",
      });
    }

    if (
      user.status !== "approved" ||
      !user.isActive ||
      !user.role
    ) {
      return res.status(403).json({
        message: "Account is not approved or active.",
      });
    }

    req.user = user;

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token.",
    });
  }
};

export const authorize = (...allowedRoles) => {
  return (req, res, next) => {

    if (!req.user) {
      return res.status(401).json({
        message: "Authentication required.",
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: "You are not authorized.",
      });
    }

    next();
  };
};