const userServices = require('../services/userServices');

  const getAll= async(req,res)=>{
    const users = await userServices.getAllservices()
    res.status(200).json(users);
  }
  const login = async (req, res) => {
    const data = req.body
    console.log("llega en el body "+JSON.stringify(data.email))
    const userInfo = await userServices.login(data);
    res.json({userInfo})
    console.log(JSON.stringify(userInfo));
  }

  module.exports ={
      login,
      getAll
  }
  