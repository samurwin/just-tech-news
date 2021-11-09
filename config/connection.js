const Sequalize = require('sequelize');

require('dotenv').config();

// create connection to our database
const sequelize = new Sequalize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;
