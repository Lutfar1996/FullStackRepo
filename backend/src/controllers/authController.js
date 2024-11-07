// /src/controllers/authController.js

const pool = require("../config/db");

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  try {
    const query =
      "INSERT INTO users(email, password) VALUES($1, $2) RETURNING id, email";
    const values = [email, password]; // In a real app, you should hash the password

    const result = await pool.query(query, values);

    res.status(201).json({
      message: "User registered successfully!",
      user: result.rows[0], // Send back user details (e.g., id, email)
    });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { registerUser };
