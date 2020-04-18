const connection = require("./connection");

const orm = {
  selectAll: (table, cb) => {
    const query = "SELECT * FROM ??"
    connection.query(query, [table], (err, result) => {
      if (err) { throw err; }
      cb(result)
    })
  },

  insertOne: (table, rowValue, cb) => {
    const query = "INSERT INTO ?? SET ?"
    connection.query(query, [table, rowValue], (err, result) => {
      if (err) { throw err; }
      cb(result)
    })

  },

  updateOne: (table, updateValues, condition, cb) => { 
    const query = "UPDATE ?? SET ? WHERE ?"
    connection.query(query, [table, updateValues, condition], (err, result) => {
      if (err) { throw err; }
      cb(result)
    })


  }


};

module.exports = orm;