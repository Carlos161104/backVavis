import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Address = sequelize.define("addresses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  country: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },

  state: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },

  city: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },

  postal_code: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },

  address_line_1: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },

  address_line_2: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },

  address_line_3: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },

  comments: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },

  channel_id: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  client_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
