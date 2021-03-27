const express = require("express");

const mongoose = require("mongoose");
const config = require("config");
const auth = require("../middleware/auth");
const { Room } = require("../models/room");
const { Joi } = require("joi");
const { response } = require("express");
const router = express.Router();
const { User, validates, validateUser } = require("../models/user");

router.post("/", auth, async (req, res) => {
  const { errors } = validateUser(req.body);
  if (errors) return res.status(400).json({  });
   const {name, content, member}=req.body;
    console.log(req.user._id);
  try {
    const newRoom = new Room({
      name,
      content,
      member,
      user: req.user._id
    });
    const room = await newRoom.save();
    res.json(room);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
