import { Inventory } from "../models/Inventory.js";

export const getInventories = async (req, res) => {
  try {
    const inventories = await Inventory.findAll();
    res.json(inventories);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const getInventory = async (req, res) => {
  try {
    const { id } = req.params;
    const inventory = await Inventory.findByPk(id);

    if (!inventory) {
      return res.json({ error: "Inventory not found" });
    }

    return res.json(inventory);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const createInventory = async (req, res) => {
  const {
    quantity,
    sold_quantity,
    bin_location_id,
    status_id,
    purchase_id,
    item_id,
  } = req.body;

  try {
    const newInventory = await Inventory.create({
      quantity,
      sold_quantity,
      bin_location_id,
      status_id,
      purchase_id,
      item_id,
    });
    res.json(newInventory);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const updateInventory = async (req, res) => {
  try {
    const { id } = req.params;
    const inventory = await Inventory.findByPk(id);

    if (!inventory) {
      return res.json({ error: "Inventory not found" });
    }

    await inventory.set(req.body);
    await inventory.save();
    return res.json(inventory);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const deleteInventory = async (req, res) => {
  try {
    const { id } = req.params;
    const inventory = await Inventory.findByPk(id);

    if (!inventory) {
      return res.json({ error: "Inventory not found" });
    }

    await inventory.destroy();
    return res.json({ message: "Inventory deleted" });
  } catch (error) {
    res.json({ error: error.message });
  }
};
