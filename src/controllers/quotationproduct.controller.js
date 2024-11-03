import { QuotationProduct } from "../models/QuotationProduct.js";

export const getQuotationProducts = async (req, res) => {
  try {
    const quotationProducts = await QuotationProduct.findAll();
    res.json(quotationProducts);
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const getQuotationProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const quotationProduct = await QuotationProduct.findByPk(id);
    res.json(quotationProduct);
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const createQuotationProduct = async (req, res) => {
  try {
    const { product_id, quotation_id } = req.body;
    const newQuotationProduct = await QuotationProduct.create(
      {
        product_id,
        quotation_id,
      },
      {
        fields: ["product_id", "quotation_id"],
      }
    );
    res.json(newQuotationProduct);
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const updateQuotationProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { product_id, quotation_id } = req.body;
    const quotationProduct = await QuotationProduct.findByPk(id);
    await quotationProduct.update(
      {
        product_id,
        quotation_id,
      },
      {
        fields: ["product_id", "quotation_id"],
      }
    );
    res.json(quotationProduct);
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const deleteQuotationProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await QuotationProduct.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "QuotationProduct deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};
