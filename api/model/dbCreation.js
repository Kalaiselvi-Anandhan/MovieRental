var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:""
});

connection.connect(function(err){
    if(err) throw err;
    connection.query("CREATE DATABASE IF NOT EXISTS dummy1",function(err,result){
        if(err) throw err;
        console.log("db created");
    });
});

module.exports = connection;