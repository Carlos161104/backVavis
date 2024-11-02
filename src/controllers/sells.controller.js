import { Sell } from "../models/Sell.js";

export const getSells = async (req, res) => {
  try {
    const sells = await Sell.findAll();
    res.json(sells);
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const getSell = async (req, res) => {
  try {
    const { id } = req.params;
    const sell = await Sell.findByPk(id);
    res.json(sell);
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const createSell = async (req, res) => {
  try {
    const newSell = await Sell.create(req.body);
    res.json(newSell);
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const updateSell = async (req, res) => {
  try {
    const { id } = req.params;
    const sell = await Sell.findByPk(id);
    if (sell) {
      await sell.update(req.body);
      res.json({
        message: "Sell updated",
      });
    } else {
      res.json({
        message: "Sell not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const deleteSell = async (req, res) => {
  try {
    const { id } = req.params;
    const sell = await Sell.findByPk(id);
    if (sell) {
      await sell.destroy();
      res.json({
        message: "Sell deleted",
      });
    } else {
      res.json({
        message: "Sell not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};
