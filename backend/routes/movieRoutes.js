const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController');


router.get("/list", movieController.fetchMovies);
router.post("/add_movie", movieController.addMovie);

module.exports = router;