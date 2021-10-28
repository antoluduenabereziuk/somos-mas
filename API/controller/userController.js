const userServices = require('../services/userServices');

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
  