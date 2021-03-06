const mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL) {conection = mysql.createConnection(process.env.JAWSDB_URL)}

else{
  connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
});
}

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected")
});

module.exports = connection;