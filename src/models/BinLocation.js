import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const BinLocation = sequelize.define(
  "bin_locations",
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
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  { timestamps: false }
);
