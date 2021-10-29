const userServices = require("../services/userServices");

const create = async (req, res) => {
  const data = req.body;
  console.log("llega en el body " + JSON.stringify(data.user_name));
  const userId = await userServices.create(data);
  res.status(201).json({ userId });
};

const login = async (req, res) => {
  const data = req.body;
  console.log("llega en el body " + JSON.stringify(data.email));
  const userInfo = await userServices.login(data);
  res.json({ userInfo });
  console.log(JSON.stringify(userInfo));
};

module.exports = {
  create,
  login,
};
