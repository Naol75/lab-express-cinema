const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((response) => {
      res.render("movies", {
        allMovies: response,
      });
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/movies/:movieId", (req, res, next) => {
    const {movieId} = req.params
    Movie.findById(movieId)
    .then((response) =>{
        res.render("movie-details.hbs", {
            movie: response
        })
    })
    .catch((error) => {
        next(error)
    })

});

module.exports = router;
