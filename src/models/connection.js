// require('dotenv').config({
//     path: '.env'
// });
 const Sequelize = require('sequelize');
// const connection = new Sequelize(
//     'mssql://rafael.torreson:T0rr&s0n100%@191.239.240.59:11433/desafio_backend', {
//         dialect: 'mssql',
//         dialectOptions: {
//             requestTimeout: 3000
//         }
//     }
// );

const connection = new Sequelize(
    'desafio_backend',
    'rafael.torreson',
    'T0rr&s0n100%',
    {
        host: '191.239.240.59',
        port: 11433,
        dialect: 'mssql'
})

module.exports = connection;