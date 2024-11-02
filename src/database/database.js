import { Sequelize } from "sequelize";
// Load dotenv
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Configure environment rules for development and production
let sslopt = {};

if (process.env.NODE_ENV !== "development") {
  sslopt = {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  };
}

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    dialectOptions: sslopt,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: false,
  }
);
