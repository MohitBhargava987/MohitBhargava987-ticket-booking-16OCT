const dbConnect = require('../config/db');

// Get all movies
const fetchMovies = async (req, res) => {
  try {
    const sql = `SELECT * FROM movies`;
    const movies = await dbConnect(sql, []);
    return res.json({ is_error: 0, status: 200, movies });
  } catch (error) {
    console.error('fetchMovies error', error);
    return res.status(500).json({ message: "Failed to fetch movies" });
  }
};

// Add new movie with duplicate check
const addMovie = async (req, res) => {
  try {
    const { title, genre, duration } = req.body;
    if (!title || !genre || !duration) {
      return res.status(400).json({ message: "title, genre and duration are required" });
    }

    // ✅ Duplicate check: title (case-insensitive)
    const dupSql = `SELECT id FROM movies WHERE LOWER(title) = LOWER(?) LIMIT 1`;
    const dup = await dbConnect(dupSql, [title]);
    if (dup && dup.length > 0) {
      return res.status(409).json({ message: "Movie with this title already exists" });
    }

    const sql = `INSERT INTO movies (title, genre, duration) VALUES (?, ?, ?)`;
    const result = await dbConnect(sql, [title, genre, duration]);
    return res.status(201).json({
      is_error: 0,
      status: 201,
      id: result.insertId,
      message: "Movie added successfully"
    });
  } catch (error) {
    console.error('addMovie error', error);
    return res.status(500).json({ message: "Failed to add movie" });
  }
};

module.exports = { fetchMovies, addMovie };
