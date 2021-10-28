const express = require('express');
const router = express.Router({ mergeParams: true });
const userController = require("../controller/userController");
const authValidator = require ("../auth/expressValidator");


router.post('/login',(req, res)=>{
  (req, res, userController.login)
});

// router.post('/register',(req,res)=>{
//   routeController.handleRequest(req,res,userController.create)
// })

module.exports = router