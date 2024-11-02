import { Supplier } from "../models/Supplier.js";

export const getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.findAll();
    res.json(suppliers);
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const getSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);
    res.json(supplier);
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const createSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.create(req.body);
    res.json(supplier);
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const updateSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);
    await supplier.update(req.body);
    res.json(supplier);
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const deleteSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);
    await supplier.destroy();
    res.json({ message: "Supplier deleted" });
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};
