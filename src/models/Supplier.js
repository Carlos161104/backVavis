import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Supplier = sequelize.define(
  "suppliers",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    quality: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 100,
      },
    },
    time: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 100,
      },
    },
    service: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 100,
      },
    },
    product_id: {
      type: DataTypes.BIGINT,
      // references: {
      //   model: "products",
      //   key: "id",
      // },
    },
  },
  { timestamps: false }
);
