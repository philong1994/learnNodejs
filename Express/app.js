var express = require("express");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// create application/json parser
var jsonParser = bodyParser.json();
app.set("view engine", "ejs");
//custom midwave
app.use("/",function(req,res, next) {
    console.log("Request URL : ",req.url);
    req.requestTime = new Date();
    next();
});
//Khai báo truy cập resource trong thư mục public
app.use("/assets",express.static(__dirname + '/public'));
app.get("/",function (req, res) {
    console.log("Cookies : ",req.cookies);
    res.render('index');
});
app.get("/api",function (req, res) {
    res.json({
        firstName : "Phi",
        lastName : "Longss"
    });
});
app.get("/user/:id",function (req, res) {
    res.render('user', {ID : req.params.id, queryString : req.query.qrs});
});
app.post('/login', urlencodedParser, function (req, res) {
    res.send('welcome, ' + req.body.username);
  });
  app.post('/loginjson', jsonParser, function (req, res) {
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    
  });
app.listen(port, function () {
    console.log("Server is Listening on Port: " , port);
});