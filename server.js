// load the things we need
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// connect database
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
  res.render('pages/index');
});
// about page
app.get('/hospitality', function (req, res) {
  res.render('pages/hospitality');
});
app.get('/account', function (req, res) {
  res.render('pages/account',{
    error:""
  });
});
app.get('/consumer_lending', function (req, res) {
  res.render('pages/consumer_lending');
});
app.get('/registerUser',function(req,res){
  res.render('pages/register');
})
//handle data

require('./app/routers/user.router')(app);

// server running
app.listen(3000, () => {
  console.log("Server is running on port 3000")
})