const { DataTypes } = require("sequelize");

module.exports = (sequelize, type) => {
    return sequelize.define('inventory', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        product_description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        quantity_available: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        sku: {
            type: DataTypes.STRING, // Código de inventario (Stock Keeping Unit)
            allowNull: true,
            unique: true
        },
        date_added: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, { 
        timestamps: false // Si no deseas que Sequelize agregue automáticamente las columnas createdAt y updatedAt
    });
};