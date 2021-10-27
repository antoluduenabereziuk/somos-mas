const { Sequelize } = require('sequelize')

const db = new Sequelize('Somo-mas-prueba-local', 'root', '123456789KIKI', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

module.exports = db