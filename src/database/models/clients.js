const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('clients', {
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
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true, 
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING(10), 
      allowNull: true,
      unique: true, 
    },
    company: {
      type: DataTypes.STRING(50), 
      allowNull: true,
    },
    channel_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    sales_funnel_id: {
      type: DataTypes.INTEGER, 
      references: {
        model: 'sales_funnels',
        key: 'id',
      },
    },
  }, { 
    timestamps: false,
  });
};
