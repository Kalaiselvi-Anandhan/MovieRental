var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysqlApostrophe = require("mysql-apostrophe");
var port = process.env.PORT||3000;
var routes = require("./api/routes/routes.js");


app.listen(port);
console.log("server started");

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(mysqlApostrophe);


routes(app);