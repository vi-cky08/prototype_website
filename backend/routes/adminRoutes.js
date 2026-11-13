import express from "express";

import {
  createAdmin,
  getAdmins,
  deactivateAdmin,
} from "../controllers/adminController.js";

import {
  protect,
  authorize,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);
router.use(authorize("superadmin"));

router.post("/", createAdmin);
router.get("/", getAdmins);
router.patch("/:id/deactivate", deactivateAdmin);

export default router;