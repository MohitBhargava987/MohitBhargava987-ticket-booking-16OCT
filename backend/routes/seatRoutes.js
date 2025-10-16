const express = require('express');
const router = express.Router();

const seatController = require('../controllers/seatController');

router.get("/:showId", seatController.fetchSeats);
router.put("/update_seat_status", seatController.changeSeatStatus);

module.exports = router;