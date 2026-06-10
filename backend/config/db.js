const mysql = require("mysql2");

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error("MySQL Connection Failed:");
        console.error(err);
        return;
    }

    console.log("✅ MySQL Connected Successfully");

    connection.release();
});

module.exports = pool.promise();