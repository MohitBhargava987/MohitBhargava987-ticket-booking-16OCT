const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'rocked_db',
    connectionLimit: 10
});

async function dbConnect(sql, data, printSql) {
    console.log(mysql.format(sql, data))
    let [result] = await pool.query(sql, data);
    console.log(result,'resultresult');
    
    if (printSql) {
        console.log(mysql.format(sql, data));
    }
    return result;
}
module.exports = dbConnect;