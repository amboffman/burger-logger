const express = require("express");

const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


router.post("/api/burgers", (req, res) => {
  burger.insertOne({ name: req.body.burger_name, devoured: req.body.devoured }, (result) => {
    res.json({ id: result.id })
    ;
  });
});

router.put("/api/burgers/:id/devoured", (req, res) => {
  const condition = { id: req.params.id };
  const update = { devoured: req.body.value };

  burger.updateOne(update, condition, (result) => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});




module.exports = router;