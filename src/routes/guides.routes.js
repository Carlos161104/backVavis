import { Router } from "express";
import {
  getGuides,
  createGuide,
  getGuide,
  updateGuide,
  deleteGuide,
} from "../controllers/guides.controller.js";

const router = Router();

router.get("/", getGuides);
router.post("/", createGuide);
router.get("/:id", getGuide);
router.put("/:id", updateGuide);
router.delete("/:id", deleteGuide);

export default router;
