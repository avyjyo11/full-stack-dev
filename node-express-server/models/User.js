// const Sequelize = require("sequelize");
const mongoose = require("../utils/dbconnect");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, min: 3, unique: true },
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
