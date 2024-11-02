import { sequelize } from "./database.js";
import { BinLocation } from "../models/BinLocation.js";
import { seedData } from "../config/seedData.js";

export const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await BinLocation.bulkCreate(seedData.binLocations);

    console.log("Seed data inserted");
  } catch (error) {
    console.error("Error inserting seed data: ", error);
  }
};
