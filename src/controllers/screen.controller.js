const express = require("express");
const router = express.Router();
const Screen = require("../models/screens.model");

router.post("/", async (req, res) => {
  try
   {
    const screen = await Screen.create(req.body);

    res.status(201).send(screen);
  }
   catch
   (err) 
   {
    return res.status(500).send(err);
  }
});

module.exports = router;