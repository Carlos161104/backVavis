import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Order = sequelize.define(
  "orders",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    cost: {
      type: DataTypes.DECIMAL(6, 2),
    },
    payment_method_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    sales_funnel_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    address_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    order_pdf: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);
