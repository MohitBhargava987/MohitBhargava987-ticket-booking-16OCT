require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const movieRoutes = require('./routes/movieRoutes');
const showRoutes = require('./routes/showRoutes');
const seatRoutes = require('./routes/seatRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

app.use(cors());
app.use(express.json());

app.use("/api/movies", movieRoutes);
app.use("/api/shows", showRoutes);
app.use("/api/seats", seatRoutes);
app.use("/api/bookings", bookingRoutes);

let port = process.env.PORT || 3000;
app.get("/", (req, res) => res.send("🎬 Ticket Booking API Running"));
app.listen(port, () => {
    console.log(`App is listening on this port`, port);
});