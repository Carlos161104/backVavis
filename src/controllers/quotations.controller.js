import { Quotation } from "../models/Quotation.js";

export const getQuotations = async (req, res) => {
  try {
    const quotations = await Quotation.findAll();
    res.json(quotations);
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const getQuotation = async (req, res) => {
  try {
    const { id } = req.params;
    const quotation = await Quotation.findByPk(id);
    res.json(quotation);
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const createQuotation = async (req, res) => {
  try {
    const newQuotation = await Quotation.create(req.body);
    res.json(newQuotation);
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const updateQuotation = async (req, res) => {
  try {
    const { id } = req.params;
    const quotation = await Quotation.findByPk(id);
    if (quotation) {
      await quotation.update(req.body);
      res.json({
        message: "Quotation updated",
      });
    } else {
      res.json({
        message: "Quotation not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const deleteQuotation = async (req, res) => {
  try {
    const { id } = req.params;
    const quotation = await Quotation.findByPk(id);
    if (quotation) {
      await quotation.destroy();
      res.json({
        message: "Quotation deleted",
      });
    } else {
      res.json({
        message: "Quotation not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};
