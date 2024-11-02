import { Router } from "express";

import {
  createTrackInventory,
  deleteTrackInventory,
  getTrackInventory,
  getTrackInventoryById,
  updateTrackInventory,
} from "../controllers/trackinventory.controller.js";

const router = Router();

router.get("/", getTrackInventory);
router.post("/", createTrackInventory);
router.get("/:id", getTrackInventoryById);
router.put("/:id", updateTrackInventory);
router.delete("/:id", deleteTrackInventory);

export default router;
