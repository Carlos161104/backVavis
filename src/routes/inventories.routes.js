import { Router } from "express";

import {
  createInventory,
  getInventories,
  getInventory,
  updateInventory,
  deleteInventory,
} from "../controllers/inventories.controller.js";

const router = Router();

router.get("/", getInventories);
router.get("/:id", getInventory);
router.post("/", createInventory);
router.put("/:id", updateInventory);
router.delete("/:id", deleteInventory);

export default router;
