const { DataTypes } = require('sequelize');
const db = require('../Connection/sequelize')

const User = db.define('users', {
    Nombre: { //firstName
        type: DataTypes.STRING
    },
    Apellido: { // lastName
        type: DataTypes.STRING
    },
    Email: { // email
        type: DataTypes.STRING
    },
    Password: { //password
        type: DataTypes.STRING
    }
})

module.exports = User