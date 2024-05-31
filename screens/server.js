const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

app.use(express.json());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // Your MySQL username
  password: 'password', // Your MySQL password
  database: 'mydatabase', // Your MySQL database name
  connectionLimit: 10,
});

// Route for user sign-up
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if username or email already exists
    const [existingUser] = await pool.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Insert new user into database
    await pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);

    res.json({ message: 'User signed up successfully' });
  } catch (error) {
    console.error('Error during sign-up:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route for user login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists and password is correct
    const [user] = await pool.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
    if (user.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
