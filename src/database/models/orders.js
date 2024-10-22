const { DataTypes } = require("sequelize");

module.exports = (sequelize, type) => {
  return sequelize.define(
    "orders",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      cost: {
        type: DataTypes.DECIMAL(6, 2),
      },
      payment_method_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      sales_funnel_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      address_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
