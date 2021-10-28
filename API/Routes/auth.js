const express = require('express');
const router = express.Router({ mergeParams: true });
const userController = require("../controller/userController");
const {validatorLogin}= require ("../auth/expressValidator");
const routeController = require("../common/routeController");


router.post('/signin', validatorLogin,(req, res)=>{
  routeController.handleRequest(req, res, userController.login)
});

module.exports = router