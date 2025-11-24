const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "containers-us-west-151.railway.app",
  port: 6738,
  user: "root",
  password: "OmzuTGVjyxYKmjbDzmWvoYFgOLzYXZyc",
  database: "railway"
});

db.connect(err => {
  if (err) {
    console.error("Database Connection Error:", err);
    return;
  }
  console.log("MySQL Connected");
});

module.exports = db;
