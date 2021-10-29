const userModel = require("../models/Users");
const encrytp = require("../auth/encrypt");

const create = async ({ user_name, password, email }) => {
  console.log("createUser - userName[" + user_name + "]");
  //Check Duplicate UserName
  const userExist = await userModel.findOne({
    where: { user_name: user_name.toLowerCase() },
  });
  if (userExist) {
    throw new error.AppError(exceptions.exceptionType.users.userExists);
  }

  //Check Duplicate Email
  const emailExist = await userModel.findOne({
    where: { email: email.toLowerCase() },
  });
  if (emailExist) {
    throw new error.AppError(exceptions.exceptionType.users.emailExists);
  }

  const data = {
    user_name: user_name.toLowerCase(),
    password: encryptPassword(password),
    email,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  console.log("createUser - data[" + JSON.stringify(data) + "]");
  try {
    return await userModel.create(data);
  } catch (e) {
    const errorMessage = `Create User - Detail: ` + e.message;
    console.error("createUser - user_name[" + user_name + "]");
    throw new error.AppError(
      exceptions.exceptionType.database.entity.canNotBeCreated,
      errorMessage
    );
  }
};

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

const login = async ({ email, password }) => {
  console.log("login - email[" + email + "]" + " - password[" + password + "]");
  const user = await userModel.findOne({
    where: { email: email },
  });
  console.log("user: " + user);
  const isMatch = user && (await comparePass(password, user.password));
  if (!isMatch) {
    throw new error.AppError(
      exceptions.exceptionType.users.invalidPassword,
      "userService.login"
    );
  }
  const token = generateToken(user.id_user, user.user_name);
  console.log(token);
  return { token };
};
