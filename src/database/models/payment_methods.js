const {DataTypes} = require('sequelize');

module.exports = (sequelize, type) => {
    return sequelize.define(
        "payment_methods",
        {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
            type: DataTypes.STRING(20),
            allowNull: false,
          },
        },
        {
          timestamps: false,
        }
    );
};
