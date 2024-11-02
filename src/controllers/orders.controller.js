import { Order } from "../models/Order.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const getOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);

    if (!order) {
      return res.json({ error: "Order not found" });
    }

    return res.json(order);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const createOrder = async (req, res) => {
  const { cost, payment_method_id, sales_funnel_id, client_id, address_id } =
    req.body;

  try {
    const newOrder = await Order.create({
      cost,
      payment_method_id,
      sales_funnel_id,
      client_id,
      address_id,
    });
    res.json(newOrder);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);

    if (!order) {
      return res.json({ error: "Order not found" });
    }

    await order.set(req.body);
    await order.save();
    return res.json(order);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);

    if (!order) {
      return res.json({ error: "Order not found" });
    }

    await order.destroy();
    return res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.json({ error: error.message });
  }
};
