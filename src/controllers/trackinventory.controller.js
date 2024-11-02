import { TrackInventory } from "../models/TrackInventory.js";

export const getTrackInventory = async (req, res) => {
  try {
    const trackInventory = await TrackInventory.findAll();
    res.json(trackInventory);
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const getTrackInventoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const trackInventory = await TrackInventory.findOne({
      where: {
        id,
      },
    });
    res.json(trackInventory);
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const createTrackInventory = async (req, res) => {
  const { quantity, guide_pdf, guide_id, inventory_id } = req.body;
  try {
    const newTrackInventory = await TrackInventory.create(
      {
        quantity,
        guide_pdf,
        guide_id,
        inventory_id,
      },
      {
        fields: ["quantity", "guide_pdf", "guide_id", "inventory_id"],
      }
    );
    if (newTrackInventory) {
      res.json({
        message: "Track Inventory created successfully",
        data: newTrackInventory,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const updateTrackInventory = async (req, res) => {
  const { id } = req.params;
  const { quantity, guide_pdf, guide_id, inventory_id } = req.body;
  try {
    const trackInventory = await TrackInventory.findOne({
      where: {
        id,
      },
    });
    await trackInventory.update({
      quantity,
      guide_pdf,
      guide_id,
      inventory_id,
    });
    res.json({
      message: "Track Inventory updated successfully",
      data: trackInventory,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const deleteTrackInventory = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteRowCount = await TrackInventory.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Track Inventory deleted successfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};
