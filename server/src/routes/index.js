const express = require('express');
const app = express();
const port = 3001;

const inventory = require('./inventory.route');

module.exports = function routes(sequelize) {
    return new Promise((resolve, reject) => {
        app.get('/', (req, res) => {
            res.send('Server is running!')
        });

        app.listen(port, () => {
            console.log(`Frontend Code Challenge Web Server listening at http://localhost:${port}`)

            //Init routes here
            inventory(app, sequelize);

            resolve(app);
        });
    });
};




