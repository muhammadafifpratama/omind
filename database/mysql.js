const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'afif',
    password: 'asd123',
    database: 'omind',
    port: 3306
});

module.exports = db;