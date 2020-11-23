const { Sequelize } = require('sequelize');
const models = require('./models');
const path = require('path');
const routes = require('./routes');

async function connectDB() {

    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: path.resolve('database/db.sqlite')
    });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    return sequelize;

}

async function ensureModels(sequelize) {
    models(sequelize);
    return sequelize.sync({ alter: true });
}

(async () => {
    const sequelize = await connectDB();
    await ensureModels(sequelize);
    await routes(sequelize);
})();


