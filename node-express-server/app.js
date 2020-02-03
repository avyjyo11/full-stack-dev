const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const sequelize = require("./utils/dbconnect");

const API_ROUTE = require("./routes/api.route");
const app = express();

//third-party-middlewares ------------------------------------------------------------------------------------
app.use(morgan("dev"));
app.use(cors());

//inbuilt-middlwewares -----------------------------------------------------------------------------------------
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use(express.static("public"));

//routing-party-middlewares ------------------------------------------------------------------------------------
app.use("/api", API_ROUTE);

//application-level-errorHandler --------------------------------------------------------------------------------------
app.use(function(req, res, next) {
  next({
    status: 404,
    msg: "Page Not Found"
  });
});

//error-handling-middleware ---------------------------------------------------------------------------------------
app.use(function(err, req, res, next) {
  res.status(err.status || 400).json({
    msg: "from error handling middleware",
    err: err
  });
});

//listen --------------
const port = process.env.PORT || 9011;
app.listen(port);
