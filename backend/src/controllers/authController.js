// /src/controllers/authController.js

const pool = require("../config/db");

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Insert the user and catch unique constraint violation
    const result = await pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      [email, password]
    );

    return res.status(201).json({ user: result.rows[0] });
  } catch (error) {
    if (error.code === "23505") {
      // Duplicate key violation error code
      return res.status(400).json({ error: "Email is already registered" });
    }
    console.error("Error registering user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { registerUser };
