const express = require("express");
const { body, validationResult } = require("express-validator");
// const jwt = require('jsonwebtoken')
//Import click for database user
const User = require("../models/User");
const { encrypt, desencrypt } = require("../auth/encrypt");

const router = express.Router();

//Endpoint registro de usuarios
// 1. Validar la información (done)
// 2. Encriptar contraseña del usuario (done)
// 3. Almacenar la información en la base de datos
router.post(
  "/auth/register",
  // Validate username
  body("username")
    .isLength({ min: 3 })
    .not()
    .trim()
    .isEmpty()
    .withMessage("You have to declare your name")
    .escape(),
  // Validate lastname
  body("surname").not().isEmpty().trim().escape(),
  // Validar email sea un email
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Insert a valid email")
    .custom((email) => {
      // Validamos que el correo exista en la base de datos antes de entrar a la funion
      // Nombre de la base de datos por valdiar mas adelante !!!!!!
      return User.findOne({
        where: {
          email,
        },
      }).then((user) => {
        if (user) {
          return Promise.reject("E-mail already in use" + user.email);
        } else {
          return true;
        }
      });
    }),
  // Validate password > 6 characters
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password length must be at least 8 characters"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({
        error: errors.array(),
      });
    } else {
      const { email, password, username, surname } = req.body;
      // we encrypt the user's password
      const encriptedPassword = await encrypt(password);
      if (encriptedPassword) {
        // hacer el push a la base de datos
        res.json({
          message: "¡Usuario creado con exito!",
          userData: {
            Fullname: `${username} ${surname}`,
            Email: email,
            Password: password,
            EncriptedPassword: encriptedPassword,
          },
        });
      } else {
      }
    }
  }
);

router.post("/auth/validation", async (req, res) => {
  const { password, encriptedPassword } = req.body;
  const validation = await desencrypt(password, encriptedPassword);
  res.json({
    validation,
  });
});

module.exports = router;
