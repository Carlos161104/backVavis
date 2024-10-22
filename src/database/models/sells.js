const { DataTypes } = require("sequelize");

module.exports = (sequelize, type) => {
  return sequelize.define(
    "addresses",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      pending_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
