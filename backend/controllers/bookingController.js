const dbConnect = require('../config/db');

// Create booking with seat availability and duplicate booking prevention
const createBooking = async (req, res) => {
  try {
    const { user_name, show_id, seat_id } = req.body;
    if (!user_name || !show_id || !seat_id) {
      return res.status(400).json({ message: "user_name, show_id and seat_id required" });
    }

    // ✅ Check show exists
    const showSql = `SELECT id FROM shows WHERE id = ? LIMIT 1`;
    const show = await dbConnect(showSql, [show_id]);
    if (!show || show.length === 0)
      return res.status(404).json({ message: "Show not found" });

    // ✅ Check seat exists and belongs to that show
    const seatSql = `SELECT id, status, show_id FROM seats WHERE id = ? LIMIT 1`;
    const seat = await dbConnect(seatSql, [seat_id]);
    if (!seat || seat.length === 0)
      return res.status(404).json({ message: "Seat not found" });
    if (seat[0].show_id != show_id)
      return res.status(400).json({ message: "Seat does not belong to the specified show" });

    // ✅ Ensure seat available
    if (seat[0].status === 'booked')
      return res.status(409).json({ message: "Seat already booked" });

    // ✅ Prevent duplicate booking for same seat
    const dupSql = `SELECT id FROM bookings WHERE seat_id = ? LIMIT 1`;
    const dup = await dbConnect(dupSql, [seat_id]);
    if (dup && dup.length > 0)
      return res.status(409).json({ message: "This seat already has a booking" });

    // ✅ Insert booking and mark seat booked
    const bookingSql = `INSERT INTO bookings (user_name, show_id, seat_id, booking_date) VALUES (?, ?, ?, NOW())`;
    const bookingResult = await dbConnect(bookingSql, [user_name, show_id, seat_id]);

    const updateSeatSql = `UPDATE seats SET status = 'booked' WHERE id = ?`;
    await dbConnect(updateSeatSql, [seat_id]);

    return res.status(201).json({
      is_error: 0,
      status: 201,
      id: bookingResult.insertId,
      message: "Booking created successfully"
    });
  } catch (error) {
    console.error('createBooking error', error);
    return res.status(500).json({ message: "Failed to create booking" });
  }
};

// Get all bookings
const getAllBookings = async (req, res) => {
  try {
    const sql = `
      SELECT b.id, b.user_name, m.title AS movie, s.show_time, se.seat_number, b.booking_date
      FROM bookings b
      JOIN shows s ON b.show_id = s.id
      JOIN movies m ON s.movie_id = m.id
      JOIN seats se ON b.seat_id = se.id
      ORDER BY b.booking_date DESC
    `;
    const bookings = await dbConnect(sql, []);
    return res.json({ is_error: 0, status: 200, bookings });
  } catch (error) {
    console.error('getAllBookings error', error);
    return res.status(500).json({ message: "Failed to fetch bookings" });
  }
};

module.exports = { createBooking, getAllBookings };
