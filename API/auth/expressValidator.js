const { body } = require('express-validator');

const validatorLogin = async()=> {
    // Validar email sea un email 
    body("email")
        .isEmail()
        .normalizeEmail()
        .withMessage("Insert a valid email"),
    // Validate password > 6 characters
    body("password")
        .isLength({ min: 6 })
        .withMessage("Password length must be at least 8 characters")
}

module.exports = {
    validatorLogin
}