import { Address } from "../models/Address.js";

export const getAddresses = async (req, res) => {
  try {
    const addresses = await Address.findAll();
    res.json(addresses);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const getAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const address = await Address.findByPk(id);

    if (!address) {
      return res.json({ error: "Address not found" });
    }

    return res.json(address);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const createAddress = async (req, res) => {
  const {
    country,
    state,
    city,
    postal_code,
    address_line_1,
    address_line_2,
    address_line_3,
    comments,
    channel_id,
    client_id,
  } = req.body;

  try {
    const newAddress = await Address.create({
      country,
      state,
      city,
      postal_code,
      address_line_1,
      address_line_2,
      address_line_3,
      comments,
      channel_id,
      client_id,
    });
    res.json(newAddress);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const updateAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const address = await Address.findByPk(id);

    if (!address) {
      return res.json({ error: "Address not found" });
    }

    await address.set(req.body);
    await address.save();
    return res.json(address);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const deleteAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const address = await Address.findByPk(id);

    if (!address) {
      return res.json({ error: "Address not found" });
    }

    await address.destroy();
    return res.json({ message: "Address deleted successfully" });
  } catch (error) {
    res.json({ error: error.message });
  }
};
