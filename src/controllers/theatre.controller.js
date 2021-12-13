const express = require("express");
const router = express.Router();
const Theatre = require("../models/theatre.model");

router.post("/", async (req, res) => {
  try
   {
    const theatre = await Theatre.create(req.body);

    res.status(201).send(theatre);
  } 
  catch (err)
   {
    return res.status(500).send(err);
  }
});

module.exports = router;