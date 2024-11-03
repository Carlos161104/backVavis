import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Quotation = sequelize.define(
  "quotations",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    valid_time: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    pdf_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    payment_method_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: "payment_methods",
      //   key: "id",
      // },
    },
    client_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: "clients",
      //   key: "id",
      // },
    },
    user_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: "users",
      //   key: "id",
      // },
    },
  },
  {
    timestamps: false,
  }
);
