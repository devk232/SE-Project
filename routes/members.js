const express = require("express");

const mongoose = require("mongoose");
const config = require("config");
const auth = require("../middleware/auth");
const { Room } = require("../models/room");
const { Joi } = require("joi");
const { response } = require("express");
const router = express.Router();
const { User, validates, validateUser } = require("../models/user");

router.post("/join", auth, async (req, res) => {
  const { errors } = validateUser(req.body);
  if (errors) return res.status(400).json({});
  const { name } = req.body;
  try {
    const newMember = new Room({
      name,
      user: req.user._id,
    });
    const member = await newMember.save();
    res.json(member);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
