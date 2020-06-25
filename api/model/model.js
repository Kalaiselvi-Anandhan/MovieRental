var sqlcon = require('./database.js');
var mysql = require("mysql"); 
var sql = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "dummy1"
});


//Object Constructor for creating many objects of same type
var Movie = function(movie){
    this.Rank = movie.Rank;
    this.Title = movie.Title;
    this.Description = movie.Description;
    this.Runtime = movie.Runtime;
    this.Genre = movie.Genre;
    this.Rating = movie.Rating;
    this.Metascore = movie.Metascore;
    this.Votes = movie.Votes;
    this.Gross_Earning_in_Mil = movie.Gross_Earning_in_Mil;
    this.Director = movie.Director;
    this.Actor = movie.Actor;
    this.Year = movie.Year;
};


Movie.createMovie = function(newMovie, result){
    sql.query("INSERT INTO movies SET ?", newMovie, function(err, res){
        if(err){
            console.log("error:",err);
            result(err,null);
        }
        else{
            console.log(res.insertId);
            result(null,res.insertId);
        }
    });
};

Movie.getMovieById = function(movieid,result){
    sql.query("SELECT Title FROM movies WHERE Rank = ?", movieid, function(err,res){
        if(err){
            console.log("error:",err);
            result(err,null);
        }
        else{
            result(null,res);
        }
    });
};
Movie.getAllMovies = function(result){
    sql.query("SELECT Title FROM movies", function(err, res){
        if(err){
            console.log("error:",err);
            result(err,null);
        }
        else{
            console.log("Movies:",res);
            console.log("Movie constructor",Movie);
            result(null,res);
        }
    });
};

Movie.updateMovieById = function(rank,movie,result){
    sql.query("UPDATE movies SET Title = ? WHERE Rank = ?", [movie.Title,rank], function(err,res){
        if(err){
            console.log("error",err);
            result(null,err);
        }
        else{
            result(null,res);
        }
    });
};

Movie.removeRowById = function(rank,result){
    sql.query("DELETE FROM movies WHERE Rank = ?",rank,function(err,res){
        if(err){
            console.log("error:",err);;
            result(null,err);
        }
        else{
            result(null,res);
        }
    })
}

Movie.getAllDirectors = function(result){
    sql.query("SELECT Director FROM movies", function(err, res){
        if(err){
            console.log("error:",err);
            result(err,null);
        }
        else{
            console.log("Movies:",res);
            console.log("Movie constructor",Movie);
            result(null,res);
        }
    });
};

Movie.getDirectorById = function(rank,result){
    sql.query("SELECT Director FROM movies WHERE Rank = ?", rank, function(err,res){
        if(err){
            console.log("error:",err);
            result(err,null);
        }
        else{
            result(null,res);
        }
    });
};

Movie.updateDirectorById = function(rank,movie,result){
    sql.query("UPDATE movies SET Director = ? WHERE Rank = ?", [movie.Director,rank], function(err,res){
        if(err){
            console.log("error",err);
            result(null,err);
        }
        else{
            result(null,res);
        }
    });
};

module.exports = Movie;
