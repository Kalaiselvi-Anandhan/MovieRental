module.exports = function(app){
    var routeHandler = require("../controls/routehandler.js");

    app.route("/api/movies")
        .get(routeHandler.list_all_movies)
        .post(routeHandler.create_a_movie);

    app.route("/api/movies/:movieId")
        .get(routeHandler.retrieve_a_movie)
        .put(routeHandler.update_a_movie)
        .delete(routeHandler.delete_a_movie);
    
    app.route("/api/directors")
        .get(routeHandler.list_all_directors)
        .post(routeHandler.create_a_movie);
    
    app.route("/api/directors/:directorId")
        .get(routeHandler.retrieve_a_director)
        .put(routeHandler.update_a_director)
        .delete(routeHandler.delete_a_director);
};