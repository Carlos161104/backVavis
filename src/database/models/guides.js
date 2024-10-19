const { DataTypes } = require("sequelize")

module.exports = (sequelize, type) => {
    return sequelize.define('guides', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        cost: {
            type: DataTypes.DOUBLE
        },
        guide_pdf: {
            type: DataTypes.TEXT
        },
        date_created: {
            type: DataTypes.DATE
        },
        couriers: {
            type: type.BIGINT,
            references: {
                model: 'carriers',
                key: 'id'
            },
        }
    }, { timestamps : false })
}