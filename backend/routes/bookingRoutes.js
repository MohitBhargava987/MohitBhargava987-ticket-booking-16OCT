const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get("/", bookingController.getAllBookings);
router.post("/create_booking", bookingController.createBooking);

module.exports = router;