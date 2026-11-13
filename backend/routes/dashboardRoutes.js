import express from "express";

import {
  getSuperAdminDashboard,
  getAdminDashboard,
} from "../controllers/dashboardController.js";

import {
  protect,
  authorize,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/super-admin",
  protect,
  authorize("superadmin"),
  getSuperAdminDashboard
);

router.get(
  "/admin",
  protect,
  authorize("admin"),
  getAdminDashboard
);

export default router;