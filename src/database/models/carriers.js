const { DataTypes } = require("sequelize")

module.exports = (sequelize, type) => {
    return sequelize.define('carriers', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(30)
        }
    }, { timestamps : false })
}