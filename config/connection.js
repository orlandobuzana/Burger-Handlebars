const mysql = require("mysql");
if (process.env.JAWSDB_MARIA_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_MARIA_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",//process.env.DB_HOST,
    port: 3306,
    user: "root",//process.env.DB_USER,
    password: "Itapeva1998",//process.env.DB_PASS,
    database: "burgers_db"//process.env.DB_NAME
  });
}
connection.connect();

module.exports = connection;