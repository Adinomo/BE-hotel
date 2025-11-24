const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,   // <-- ganti ini
  database: process.env.DB_NAME,
});

db.connect(err => {
  if (err) {
    console.error("Database Connection Error:", err);
    return;
  }
  console.log("MySQL Connected");
});

module.exports = db;
