const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "sales_funnel",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
