import { Product } from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving products",
    });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.json({
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving product",
    });
  }
};

export const createProduct = async (req, res) => {
  const {
    name,
    price,
    description,
    technical_description,
    sat_key,
    data_sheet,
    category_id,
  } = req.body;

  try {
    const newProduct = await Product.create({
      name,
      price,
      description,
      technical_description,
      sat_key,
      data_sheet,
      category_id,
    });
    res.json({
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating product",
    });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await product.update(req.body);
    res.json({
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating product",
    });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await product.destroy();
    res.json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting product",
    });
  }
};
