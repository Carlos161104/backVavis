import { sequelize } from "./database.js";
import { BinLocation } from "../models/BinLocation.js";
import { Carrier } from "../models/Carrier.js";
import { Category } from "../models/Category.js";
import { PaymentMethod } from "../models/PaymentMethod.js";
import { SaleFunnel } from "../models/SaleFunnel.js";
import { Status } from "../models/Status.js";
import { seedData } from "../config/seedData.js";

export const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await BinLocation.bulkCreate(seedData.binLocations);
    await Carrier.bulkCreate(seedData.carriers);
    await Category.bulkCreate(seedData.categories);
    await PaymentMethod.bulkCreate(seedData.paymentMethods);
    await SaleFunnel.bulkCreate(seedData.salesFunnel);
    await Status.bulkCreate(seedData.status);

    console.log("Seed data inserted");
  } catch (error) {
    console.error("Error inserting seed data: ", error);
  }
};
