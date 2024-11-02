import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Status = sequelize.define(
  "status",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  { timestamps: false }
);
