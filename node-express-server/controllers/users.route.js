const router = require("express").Router();
const User = require("../models/User");

router.route("/")
  .get(function(req, res, next) {
    res.json({
      msg: "all users list"
    });
  })
  .post(function(req, res, next) {
    res.json({
      msg: "Post users list"
    });
  });

module.exports = router;
 