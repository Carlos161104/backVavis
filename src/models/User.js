import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    rol: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "Rol que tiene un usuario: Vendedor/cotizador/Contabilidad",
    },
  },
  {
    timestamps: false,
  }
);
