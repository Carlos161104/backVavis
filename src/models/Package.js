import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Package = sequelize.define(
  "packages",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    height: {
      type: DataTypes.NUMERIC(6, 2),
    },
    width: {
      type: DataTypes.NUMERIC(6, 2),
    },
    length: {
      type: DataTypes.NUMERIC(6, 2),
    },
    weight: {
      type: DataTypes.NUMERIC(6, 2),
    },
    product_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: "products",
      //   key: "id",
      // },
    },
  },
  { timestamps: false }
);
