import { Router } from "express";
import {
  createPackage,
  deletePackage,
  getPackage,
  getPackages,
  updatePackage,
} from "../controllers/packages.controller.js";

const router = Router();

router.get("/", getPackages);
router.post("/", createPackage);
router.get("/:id", getPackage);
router.put("/:id", updatePackage);
router.delete("/:id", deletePackage);

export default router;
