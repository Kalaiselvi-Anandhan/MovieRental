const Sequelize = require("sequelize");
const Table = require("./database.js");

const connection = new Sequelize("sampledb", "root", "", {
    dialect:"mysql",
    operatorsAliases:false,
    define:{
        timestamps:false
    }
});

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
    Table.create(newMovie).then(function(res){
            console.log(res.insertId);
            result(null,res.insertId);
    });
};

Movie.getMovieById = function(movieid,result){
    Table.findAll({attributes:["Title"],where:{Rank:movieid},raw:true}).then(function(res){
            result(null,res);
    });
};

Movie.getAllMovies = function(result){
    Table.findAll({attributes:["Title"],raw:true}).then(function(res){
            console.log("Movie constructor",Movie);
            result(null,res);
    });
};

Movie.updateMovieById = function(rank,movie,result){
    Table.update({Title:movie.Title},{where:{Rank:rank}}).then(function(res){
            result(null,res);
    });
};

Movie.removeRowById = function(rank,result){
    Table.destroy({where:{Rank:rank},raw:true}).then(function(res){
            result(null,res);
    })
}

Movie.getAllDirectors = function(result){
    Table.findAll({attributes:["Director"],raw:true}).then(function(res){
            console.log("Movie constructor",Movie);
            result(null,res);
    });
};

Movie.getDirectorById = function(rank,result){
    Table.findAll({attributes:["Director"],where:{Rank:rank},raw:true}).then(function(res){
        result(null,res);
    });
};

Movie.updateDirectorById = function(rank,movie,result){
    Table.update({Director:movie.Director},{where:{Rank:rank}}).then(function(res){
            result(null,res);
    });
};

module.exports = Movie;