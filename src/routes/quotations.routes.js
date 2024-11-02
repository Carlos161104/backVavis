import { Router } from "express";

import {
  createQuotation,
  getQuotations,
  getQuotation,
  updateQuotation,
  deleteQuotation,
} from "../controllers/quotations.controller.js";

const router = Router();

router.get("/", getQuotations);
router.get("/:id", getQuotation);
router.post("/", createQuotation);
router.put("/:id", updateQuotation);
router.delete("/:id", deleteQuotation);

export default router;
