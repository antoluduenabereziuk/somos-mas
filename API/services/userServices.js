const userModel = require("../models/User");
const { desencrypt } = require("../auth/encrypt");


// const generateToken = (id_user, user_name) => {
//   return jwt.sign(
//     {
//       id_user: id_user,
//       user_name: user_name,
//       rol: "ADMIN",
//     },
//     config.get("auth.secret"),
//     {
//       expiresIn: config.get("auth.tokenExpire"),
//     }
//   );
// };

const login = async ({ email, password }) => {
  console.log("login - email[" + email + "]" + " - password[" + password + "]");
  const user = await userModel.findOne({
    where: { email: email },
  });
    console.log("user: " + user);
  const isMatch = user && (await desencrypt(password, user.password));
  if (!isMatch) {
    // throw new error.AppError(
    //   exceptions.exceptionType.users.invalidPassword,
    //   "userService.login"
    return JSON.stringify({ok:false})
    // );
  }

  return {user};
};

module.exports = {
  login
}
