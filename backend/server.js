import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import jwt from "jsonwebtoken";

import { createServer } from "http";
import { Server } from "socket.io";

import User from "./models/User.js";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();

const httpServer = createServer(app);

const allowedOrigin = process.env.CLIENT_URL;

const io = new Server(httpServer, {
  cors: {
    origin: allowedOrigin,
    credentials: true,
  },
});

app.set("io", io);

app.use(helmet());

app.use(cors({
  origin: allowedOrigin,
  credentials: true,
}));

app.use(express.json({ limit: "10kb" }));

app.use(cookieParser());

// Socket authentication
io.use(async (socket, next) => {
  try {
    const token = socket.handshake.auth?.notificationToken;

    if (!token) {
      return next(new Error("Authentication required."));
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    if (decoded.purpose === "approval-notification") {

      const user = await User.findById(decoded.userId);

      if (!user) {
        return next(new Error("User not found."));
      }

      socket.userId = user._id.toString();
      socket.socketRole = "pending-user";

      return next();
    }

    if (decoded.purpose === "socket") {
  const user = await User.findById(decoded.userId);

  if (
    !user ||
    !user.isActive ||
    user.status !== "approved"
  ) {
    return next(new Error("Account not active."));
  }

  socket.userId = user._id.toString();
  socket.socketRole = user.role;

  return next();
}

    return next(new Error("Invalid notification token."));

  } catch (error) {
    return next(new Error("Invalid or expired token."));
  }
});

io.on("connection", (socket) => {

  if (socket.socketRole === "pending-user") {
    socket.join(`user:${socket.userId}`);
  }

  if (socket.socketRole === "admin") {
    socket.join("admins");
  }

  console.log("Socket connected:", socket.socketRole);
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-8",
  legacyHeaders: false,
});

app.get("/", (req, res) => {
  res.json({
    message: "Prototype Design API is running.",
  });
});

app.use("/api/auth", authLimiter, authRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/users", userRoutes);

app.use("/api/admins", adminRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Frontend: ${allowedOrigin}`);
  });
};

startServer();