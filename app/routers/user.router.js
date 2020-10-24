const user = require("../controllers/user.controller");

module.exports = app => {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  // Create a new Tutorial
  app.post("/register", user.createUser);
  app.post("/account", user.loginUser);
}