import { Package } from "../models/Package.js";

export const getPackages = async (req, res) => {
  try {
    const packages = await Package.findAll();
    res.json(packages);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const getPackage = async (req, res) => {
  try {
    const { id } = req.params;
    const pkg = await Package.findByPk(id);

    if (!pkg) {
      return res.json({ error: "Package not found" });
    }

    return res.json(pkg);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const createPackage = async (req, res) => {
  const { height, width, length, weight, product_id } = req.body;

  try {
    const newPackage = await Package.create({
      height,
      width,
      length,
      weight,
      product_id,
    });
    res.json(newPackage);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const updatePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const pkg = await Package.findByPk(id);

    if (!pkg) {
      return res.json({ error: "Package not found" });
    }

    await pkg.set(req.body);
    await pkg.save();
    return res.json(pkg);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const deletePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const pkg = await Package.findByPk(id);

    if (!pkg) {
      return res.json({ error: "Package not found" });
    }

    await pkg.destroy();
    return res.json({ message: "Package deleted" });
  } catch (error) {
    res.json({ error: error.message });
  }
};
