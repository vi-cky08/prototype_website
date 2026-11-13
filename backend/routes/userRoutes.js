import express from "express";

import {
  getPendingUsers,
  approveUser,
  rejectUser,
} from "../controllers/userController.js";

import {
  protect,
  authorize,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);
router.use(authorize("admin"));

router.get("/pending", getPendingUsers);

router.patch("/:id/approve", approveUser);

router.patch("/:id/reject", rejectUser);

export default router;