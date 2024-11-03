import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const QuotationProduct = sequelize.define(
  "quotation_products",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: "products",
      //   key: "id",
      // },
    },
    quotation_id: {
      type: DataTypes.BIGINT,
      // references: {
      //   model: "quotations",
      //   key: "id",
      // },
    },
  },
  {
    timestamps: false,
  }
);
