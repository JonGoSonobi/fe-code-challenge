module.exports = function inventoryRoute(app, sequelize) {
    app.get('/inventoryget', async (req, res) => {
        const inventories = await sequelize.models.Inventory.findAll();
        res.statusCode = 200;
        res.send({
            result: inventories
        });
    });

    app.post('/inventoryset', async (req, res) => {
        const inventories = await sequelize.models.Inventory.create({
            name: req.body.name,
            type: req.body.type,
            url: req.body.url
        });
        res.statusCode = 200;
        res.send();
    })
};
