// var fs = require('fs');
var db = require("./dbCreation.js");
var obj=require("./moviesdata.json");
var mysql=require("mysql");

// fs.readFile("...\moviesdata.json","utf-8",function(err,data){
    // if(err) throw err;
    // obj=JSON.parse(data);


const mysqlconnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "dummy1"
});

var obj=require("./moviesdata.json");

    mysqlconnection.connect(function(err){
       if(err) throw err;
       console.log("db connected...");

       var tabel = 'CREATE TABLE IF NOT EXISTS movies (Rank INT, Title TEXT, Description TEXT, Runtime INT, Genre TEXT, Rating INT, Metascore INT, Votes INT, Gross_Earning_in_Mil INT, Director TEXT, Actor TEXT, Year INT)';
       mysqlconnection.query(tabel, function(err, result){
           if(err) throw err;
           console.log("tabel created...");

           for(var i=0;i<obj.length;i++){
            var rank = obj[i].Rank;
            var title = obj[i].Title;
            var description = obj[i].Description;
            var runtime = obj[i].Runtime;
            var genre = obj[i].Genre;
            var rating = obj[i].Rating;
            var metascore = obj[i].Metascore;
            var votes = obj[i].Votes;
            var gross_earning_in_mil = obj[i].Gross_Earning_in_Mil;
            var director = obj[i].Director;
            var actor = obj[i].Actor;
            var year = obj[i].Year;

            var apostrophe="'";
            title=title.includes(apostrophe)?title.replace(/'/g,"\\'"):title;
            description=description.includes(apostrophe)?description.replace(/'/g,"\\'"):description;
            genre=genre.includes(apostrophe)?genre.replace(/'/g,"\\'"):genre;
            director=director.includes(apostrophe)?director.replace(/'/g,"\\'"):director;
            actor=actor.includes(apostrophe)?actor.replace(/'/g,"\\'"):actor;

            // const sql = "INSERT INTO movies (Rank,Title,Description,Runtime,Genre,Rating,Metascore,Votes,Gross_Earning_in_Mil,Director,Actor,Year) VALUES ('"+rank+"','"+title+"','"+description+"','"+runtime+"','"+genre+"','"+rating+"','"+metascore+"','"+votes+"','"+gross_earning_in_mil+"','"+director+"','"+actor+"','"+year+"')";
            var sql="INSERT INTO movies (Rank,Title,Description,Runtime,Genre,Rating,Metascore,Votes,Gross_Earning_in_Mil,Director,Actor,Year) SELECT * FROM (SELECT '"+rank+"' AS Rank,'"+title+"' AS Title,'"+description+"' AS Description,'"+runtime+"' AS Runtime,'"+genre+"' AS Genre,'"+rating+"' AS Rating,'"+metascore+"' AS Metascore,'"+votes+"' AS Votes,'"+gross_earning_in_mil+"' AS Gross_Earning_in_Mil,'"+director+"' AS Director,'"+actor+"' AS Actor,'"+year+"' AS Year) AS tmp WHERE NOT EXISTS(SELECT Rank FROM movies WHERE Rank='"+rank+"')LIMIT 1";

            mysqlconnection.query(sql, function(err){
                if(err) throw err;
                console.log("rank");
                console.log("record inserted...");
            });
        }
    });

    console.log("db and tabel was created");
});
module.exports = mysqlconnection;