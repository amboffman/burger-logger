const connection = require("./connection");
let callback = (err, result) => {
  if (err) { throw err; }
  cb(result);
}

const orm = {
  selectALL: (table, cb) => {
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