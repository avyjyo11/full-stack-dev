const router = require("express").Router();
const usersRoute = require("../controllers/users.route");
const authRoute = require("../controllers/auth.route");

router.use("/auth", authRoute);
router.use("/users", usersRoute);

module.exports = router;
