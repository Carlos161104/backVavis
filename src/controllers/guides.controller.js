import { Guide } from "../models/Guide.js";

export const getGuides = async (req, res) => {
  try {
    const guides = await Guide.findAll();
    res.json(guides);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const getGuide = async (req, res) => {
  try {
    const { id } = req.params;
    const guide = await Guide.findByPk(id);

    if (!guide) {
      return res.json({ error: "Guide not found" });
    }

    return res.json(guide);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const createGuide = async (req, res) => {
  const { cost, guide_pdf, couriers } = req.body;

  try {
    const newGuide = await Guide.create({
      cost,
      guide_pdf,
      couriers,
    });
    res.json(newGuide);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const updateGuide = async (req, res) => {
  try {
    const { id } = req.params;
    const { cost, guide_pdf, couriers } = req.body;

    const guide = await Guide.findByPk(id);

    if (!guide) {
      return res.json({ error: "Guide not found" });
    }

    guide.cost = cost;
    guide.guide_pdf = guide_pdf;
    guide.couriers = couriers;

    await guide.save();

    return res.json(guide);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const deleteGuide = async (req, res) => {
  try {
    const { id } = req.params;
    const guide = await Guide.findByPk(id);

    if (!guide) {
      return res.json({ error: "Guide not found" });
    }

    await guide.destroy();

    return res.json({ message: "Guide deleted successfully" });
  } catch (error) {
    res.json({ error: error.message });
  }
};
