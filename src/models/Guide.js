import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Guide = sequelize.define(
  "guides",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    cost: {
      type: DataTypes.DOUBLE,
    },
    guide_pdf: {
      type: DataTypes.TEXT,
    },
    date_created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    couriers: {
      type: DataTypes.BIGINT,
      // references: {
      //   model: "carriers",
      //   key: "id",
      // },
    },
  },
  { timestamps: false }
);
