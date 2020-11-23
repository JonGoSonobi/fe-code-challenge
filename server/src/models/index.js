const inventory = require('./inventory.model');

module.exports = function (sequelize) {
    return {
        inventory: inventory(sequelize)
    };
};
