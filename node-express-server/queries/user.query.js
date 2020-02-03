const User = require("../models/User");

exports.find = (data = {}) => {
  if (data === {}) {
    return User.find();
  } else {
    return User.find(data);
  }
};

exports.findOne = (data = {}) => {
  return User.findOne(data);
};

exports.create = async data => {
  try {
    const user = new User(data);
    const res = await user.save();
    return res;
  } catch (err) {
    throw err;
  }
};

exports.update = data => {};

exports.delete = data => {};
