const db = require("../models");
const User = db.user;

exports.createUser = (req, res) => {
  const user = new User({
    full_name: req.body.full_name,
    username:req.body.username,
    email: req.body.email,
    address: req.body.address,
    gender: req.body.gender,
    birthday: req.body.birthday   
  });
  User.findOne({ email: req.body.email}).exec(function(err,result,next){
    if(result){
      next();
      return res.status(400).send({message:'error'});
    } 
    User.findOne({ username: req.body.username}).exec(function(err,result){
      if(result){
        next();
        return res.status(400).send('Username is already exists')
      }
       user.save(user)
    .then(data => {
      res.send(data);
      console.log(data)
      next();
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
    }) 
  })
};
exports.loginUser = (req, res) => {
  console.log("okay")
  if(req.body.username === "admin" & req.body.password === "admin"){
    res.render("pages/account",{
      error:"Success"
    })
  }
  else {
    console.log("Error");
    //res.send("Error")
    res.render("pages/account", {
      error: "Username or password is wrong !"
    })
  }
}