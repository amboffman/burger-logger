const orm = require("../config/orm")

const burger = {

  selectAll: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },

  insertOne: (entry, cb) => {
    orm.insertOne("burgers", entry, (res) => {
      cb(res);
    });
  },

  updateOne: (entry, criteria, cb) => {
    orm.updateOne("burgers", entry, criteria, (res) => {
      cb(res);
    });
  }
}