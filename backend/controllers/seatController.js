const dbConnect = require('../config/db');

// Get seats by showId
const fetchSeats = async (req, res) => {
  try {
    const showId = req.params.showId;
    if (!showId) return res.status(400).json({ message: "showId required" });

    const sql = `SELECT * FROM seats WHERE show_id = ? ORDER BY seat_number`;
    const seats = await dbConnect(sql, [showId]);
    return res.json({ is_error: 0, status: 200, seats });
  } catch (error) {
    console.error('fetchSeats error', error);
    return res.status(500).json({ message: "Failed to fetch seats" });
  }
};

// Update seat status (available/booked)
const changeSeatStatus = async (req, res) => {
  try {
    const { seat_id, status } = req.body;
    if (!seat_id || !status) return res.status(400).json({ message: "seat_id and status required" });

    const allowed = ['available', 'booked'];
    if (!allowed.includes(status)) return res.status(400).json({ message: "Invalid status value" });

    // ✅ Check seat exists
    const seatSql = `SELECT id, status FROM seats WHERE id = ? LIMIT 1`;
    const seat = await dbConnect(seatSql, [seat_id]);
    if (!seat || seat.length === 0) return res.status(404).json({ message: "Seat not found" });

    // ✅ Prevent double booking
    if (status === 'booked' && seat[0].status === 'booked') {
      return res.status(409).json({ message: "Seat is already booked" });
    }

    const sql = `UPDATE seats SET status = ? WHERE id = ?`;
    await dbConnect(sql, [status, seat_id]);
    return res.json({ is_error: 0, status: 200, message: "Seat status updated successfully" });
  } catch (error) {
    console.error('changeSeatStatus error', error);
    return res.status(500).json({ message: "Failed to update seat status" });
  }
};

module.exports = { fetchSeats, changeSeatStatus };
