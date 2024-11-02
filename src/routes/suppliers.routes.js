import { Router } from "express";
import {
  getSuppliers,
  createSupplier,
  getSupplier,
  updateSupplier,
  deleteSupplier,
} from "../controllers/suppliers.controller.js";

const router = Router();

router.get("/", getSuppliers);
router.post("/", createSupplier);
router.get("/:id", getSupplier);
router.put("/:id", updateSupplier);
router.delete("/:id", deleteSupplier);

export default router;
