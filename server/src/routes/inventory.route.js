module.exports = function inventoryRoute(app, sequelize) {
    app.get('/inventory', async (req, res) => {
        const inventories = await sequelize.models.Inventory.findAll();
        res.statusCode = 200;
        res.send({
            result: inventories
        });
    });
};
