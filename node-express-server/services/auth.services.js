const usersQuery = require("../queries/user.query");
const bcrypt = require("bcryptjs");

exports.checkLogin = async (usrname, password) => {
  try {
    const user = await usersQuery.findOne({ username: usrname });
    const hash = user.password;
    const isPassword = bcrypt.compare(password, hash);
    return isPassword;
    //check-username
    //check-password
  } catch (err) {
    throw { status: 404, msg: "user not found" };
  }
};

exports.createAccount = async (usernameIP, emailIP, passwordIP) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(passwordIP, salt);
    const result = await usersQuery.create({
      username: usernameIP,
      email: emailIP,
      password: hash
    });
    return result;
  } catch (err) {
    throw err;
  }
};
