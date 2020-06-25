var Movie = require("../model/model.js");

exports.list_all_movies = function(req, res){
    Movie.getAllMovies(function(err, movie){
        console.log("routehandler..");
        if(err) res.send(err);

        console.log("res",movie);
        res.send(movie);
    });
};

exports.create_a_movie = function(req, res){
    var new_movie = new Movie(req.body);

    if(!new_movie.Title||!new_movie.Rank){
        res.status(400).send({error:true, message:'Please provide all the fields..'});
    }
    else{
        Movie.createMovie(new_movie, function(err, movie){
            if(err) res.send(err);

            res.json(movie);
        });
    }
};

exports.retrieve_a_movie = function(req, res){
    Movie.getMovieById(req.params.movieId, function(err, movie){
        if(err) res.send(err);
        res.json(movie);
    });
};

exports.update_a_movie = function(req, res){
    Movie.updateMovieById(req.params.movieId,new Movie(req.body), function(err, movie){
        if(err) res.send(err);
        res.json(movie);
    });
};

exports.delete_a_movie = function(req, res){
    Movie.removeRowById(req.params.movieId, function(err, movie){
        if(err) res.send(err);
        res.send("One Row is Deleted");
    });
};


exports.list_all_directors = function(req, res){
    Movie.getAllDirectors(function(err, movie){
        console.log("routehandler..");
        if(err) res.send(err);

        console.log("res",movie);
        res.send(movie);
    });
};

exports.retrieve_a_director = function(req, res){
    Movie.getDirectorById(req.params.directorId, function(err, movie){
        if(err) res.send(err);
        res.json(movie);
    });
};

exports.update_a_director = function(req, res){
    Movie.updateDirectorById(req.params.directorId,new Movie(req.body), function(err, movie){
        if(err) res.send(err);
        res.json(movie);
    });
};

exports.delete_a_director = function(req, res){
    Movie.removeRowById(req.params.directorId, function(err, movie){
        if(err) res.send(err);
        res.send("One Row is Deleted");
    });
};
