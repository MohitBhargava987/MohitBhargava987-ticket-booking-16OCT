const express = require('express');
const router = express.Router();

const showController = require('../controllers/showController');
router.get("/:movieId", showController.fetchShows);
router.post("/add_show", showController.createShow);

module.exports = router;