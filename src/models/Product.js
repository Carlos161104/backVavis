import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Product = sequelize.define(
  "products",
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
    price: {
      type: DataTypes.NUMERIC(6, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
        min: 0,
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
    technical_description: {
      type: DataTypes.TEXT,
    },
    sat_key: {
      type: DataTypes.STRING(50),
    },
    data_sheet: {
      type: DataTypes.STRING(255),
    },
    category_id: {
      type: DataTypes.BIGINT,
      references: {
        model: "categories",
        key: "id",
      },
    },
  },
  { timestamps: false }
);
