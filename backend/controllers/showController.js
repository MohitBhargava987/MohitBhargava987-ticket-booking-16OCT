const dbConnect = require('../config/db');

// Get shows by movieId
const fetchShows = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    if (!movieId) return res.status(400).json({ message: "movieId required" });

    const sql = `SELECT * FROM shows WHERE movie_id = ?`;
    const shows = await dbConnect(sql, [movieId]);
    return res.json({ is_error: 0, status: 200, shows });
  } catch (error) {
    console.error('fetchShows error', error);
    return res.status(500).json({ message: "Failed to fetch shows" });
  }
};

// Add new show with duplicate check for same movie & time
const createShow = async (req, res) => {
  try {
    const { movie_id, show_time } = req.body;
    if (!movie_id || !show_time) {
      return res.status(400).json({ message: "movie_id and show_time are required" });
    }

    // ✅ Check that movie exists
    const movieSql = `SELECT id FROM movies WHERE id = ? LIMIT 1`;
    const movie = await dbConnect(movieSql, [movie_id]);
    if (!movie || movie.length === 0) {
      return res.status(404).json({ message: "Movie not found" });
    }

    // ✅ Duplicate check: same movie and same show time
    const dupSql = `SELECT id FROM shows WHERE movie_id = ? AND show_time = ? LIMIT 1`;
    const dup = await dbConnect(dupSql, [movie_id, show_time]);
    if (dup && dup.length > 0) {
      return res.status(409).json({ message: "Show already exists for this movie at the given time" });
    }

    const sql = `INSERT INTO shows (movie_id, show_time) VALUES (?, ?)`;
    const result = await dbConnect(sql, [movie_id, show_time]);
    return res.status(201).json({
      is_error: 0,
      status: 201,
      id: result.insertId,
      message: "Show added successfully"
    });
  } catch (error) {
    console.error('createShow error', error);
    return res.status(500).json({ message: "Failed to add show" });
  }
};

module.exports = { fetchShows, createShow };
