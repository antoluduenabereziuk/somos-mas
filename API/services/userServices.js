const userModel = require("../models/User");
const {desencrypt} = require("../auth/encrypt");


const generateToken = (id_user, user_name) => {
  return jwt.sign(
    {
      id_user: id_user,
      user_name: user_name,
      rol: "ADMIN",
    },
    config.get("auth.secret"),
    {
      expiresIn: config.get("auth.tokenExpire"),
    }
  );
};

const login = async ({ email, password}) => {
//   console.log("login - email[" + email + "]" + " - password[" + password + "]");
  const tovalPassword = password ;
  const {id_user,firts_name,last_name,email,rol,password} = await userModel.findOne({
    where: { email: email },
  });
//   console.log("user: " + user);
  const isMatch = user && (await desencrypt( tovalPassword , password);
  if (!isMatch) {
      console.log("error")
    // throw new error.AppError(
    //   exceptions.exceptionType.users.invalidPassword,
    //   "userService.login"
    // );
  }
  const token = generateToken(id_user,firts_name,last_name,rol);
  console.log(token);
  return { token };
};

module.exports ={
    login
}
