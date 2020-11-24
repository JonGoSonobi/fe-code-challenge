const express = require('express');
const cors = require('cors'); //needed to make sure it runs locally
const app = express();
const port = 3001;

app.use(cors())
app.use(express.urlencoded({ extened: true }))
app.use(express.json())

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




