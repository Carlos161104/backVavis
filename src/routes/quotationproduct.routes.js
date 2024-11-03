import { Router } from "express";

import {
  createQuotationProduct,
  deleteQuotationProduct,
  getQuotationProductById,
  getQuotationProducts,
  updateQuotationProduct,
} from "../controllers/quotationproduct.controller.js";

const router = Router();

router.get("/", getQuotationProducts);
router.post("/", createQuotationProduct);
router.get("/:id", getQuotationProductById);
router.put("/:id", updateQuotationProduct);
router.delete("/:id", deleteQuotationProduct);

export default router;
