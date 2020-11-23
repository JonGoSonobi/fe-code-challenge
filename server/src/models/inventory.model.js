const { DataTypes } = require('sequelize');

function inventory(sequelize) {
    const Inventory = sequelize.define('Inventory', {
        // Model attributes are defined here
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: { //usually SITE or APP
            type: DataTypes.STRING,
            allowNull: false
        },
        url: { // If App, this represents the Store URL.
            type: DataTypes.STRING,
        }
    }, {
        // Other model options go here
    });

    return Inventory;
}

module.exports = inventory;
