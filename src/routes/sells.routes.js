import { Router } from "express";
import {
  createSell,
  deleteSell,
  getSell,
  getSells,
  updateSell,
} from "../controllers/sells.controller.js";

const router = Router();

router.get("/", getSells);
router.post("/", createSell);
router.get("/:id", getSell);
router.put("/:id", updateSell);
router.delete("/:id", deleteSell);

export default router;
