const { DataTypes } = require('sequelize');
// const db = require('../Connection/sequelize')

// const User = db.define('users', {
//     Nombre: { //firstName
//         type: DataTypes.STRING
//     },
//     Apellido: { // lastName
//         type: DataTypes.STRING
//     },
//     Email: { // email
//         type: DataTypes.STRING
//     },
//     Password: { //password
//         type: DataTypes.STRING
//     }
// })

const User = [{
    id_user:'1',
    firts_name:'John',
    last_name:'Doe',
    password:'123456',
    email:'john@example.com',
    rol:'admin'
    },
    {
    id_user:'2',
    firts_name:'Johny',
    last_name:'Bravo',
    password:'123456',
    email:'johny@example.com',
    rol:'user'
    }
];

const getAll = ()=> {
    const users= users.getAll(user=>user.id_user);
    return users
}

const  findOne = ()=> {
    return true;
}
module.exports = {
    User, 
    getAll,
    findOne
};