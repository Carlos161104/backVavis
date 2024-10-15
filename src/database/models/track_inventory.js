const { DataTypes } = require("sequelize")

module.exports = (sequelize, type) => {
    return sequelize.define('track_inventory', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        quantity: {
            type: DataTypes.DOUBLE
        },
        guide_pdf: {
            type: DataTypes.TEXT
        },
        inventory_id: {
            type: DataTypes.BIGINT,
            references: {
                model: 'inventory',
                key: 'id'
            }
        },
        guide_id: {
            type: type.BIGINT,
            references: {
                model: 'guides',
                key: 'id'
            },
            //onUpdate: 'Cascade',
           // onDelete: 'SET NULL'
        }
    }, { timestamps : false })
}