import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Inventory = sequelize.define(
  "inventories",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.NUMERIC(6, 2),
      allowNull: false,
    },
    sold_quantity: {
      type: DataTypes.NUMERIC(6, 2),
      defaultValue: 0,
    },
    bin_location_id: {
      type: DataTypes.BIGINT,
      // references: {
      //   model: "bin_locations",
      //   key: "id",
      // },
    },
    status_id: {
      type: DataTypes.BIGINT,
      // references: {
      //   model: "statuses",
      //   key: "id",
      // },
    },
    purchase_id: {
      type: DataTypes.BIGINT,
      // references: {
      //   model: "purchases",
      //   key: "id",
      // },
    },
    item_id: {
      type: DataTypes.BIGINT,
      // references: {
      //   model: "items",
      //   key: "id",
      // },
    },
  },
  { timestamps: false }
);
