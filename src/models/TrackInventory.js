import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const TrackInventory = sequelize.define(
  "track_inventory",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.DOUBLE,
    },
    guide_id: {
      type: DataTypes.BIGINT,
      // references: {
      //   model: "guides",
      //   key: "id",
      // },
    },
    inventory_id: {
      type: DataTypes.BIGINT,
      // references: {
      //     model: 'inventory',
      //     key: 'id'
      // }
    },
  },
  { timestamps: false }
);
