// db.js
const mysql = require('mysql2/promise');

async function initDatabase() {
  // Create a connection to the MySQL server
  const connection = await mysql.createConnection({
    host: 'localhost', // Change this to your MySQL server host
    user: 'your_username', // Change this to your MySQL username
    password: 'your_password', // Change this to your MySQL password
  });

  try {
    // Create the database if it doesn't exist
    await connection.query('CREATE DATABASE IF NOT EXISTS parking_app');

    // Use the parking_app database
    await connection.query('USE parking_app');

    // Create a users table for storing registration details
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
      )
    `);

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    // Close the connection
    await connection.end();
  }
}

module.exports = { initDatabase };
