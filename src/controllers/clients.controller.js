import { Client } from "../models/Client.js";

export const getClients = async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.json(clients);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const getClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByPk(id);

    if (!client) {
      return res.json({ error: "Client not found" });
    }

    return res.json(client);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const createClient = async (req, res) => {
  const {
    name,
    last_name,
    email,
    phone,
    company,
    channel_id,
    sales_funnel_id,
  } = req.body;

  try {
    const newClient = await Client.create({
      name,
      last_name,
      email,
      phone,
      company,
      channel_id,
      sales_funnel_id,
    });
    res.json(newClient);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByPk(id);

    if (!client) {
      return res.json({ error: "Client not found" });
    }

    await client.set(req.body);
    await client.save();
    return res.json(client);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByPk(id);

    if (!client) {
      return res.json({ error: "Client not found" });
    }

    await client.destroy();
    return res.json({ message: "Client deleted" });
  } catch (error) {
    res.json({ error: error.message });
  }
};
