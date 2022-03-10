require('dotenv').config({
    path: '.env'
});

const Sequelize = require('sequelize');
const connection = new Sequelize(
    process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT,
    }
);

module.exports = connection;