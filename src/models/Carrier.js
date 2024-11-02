import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Carrier = sequelize.define(
  "carriers",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(30),
    },
  },
  { timestamps: false }
);
