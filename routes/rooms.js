const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const auth = require("../middleware/auth");
const { Room } = require("../models/room");
const { Joi } = require("joi");
const { response } = require("express");
const router = express.Router();
const { User, validates, validateUser } = require("../models/user");


router.get("/", auth, async (req, res) => {
  try {
    const rooms = await Room.find({ user: req.user._id });
    res.json(rooms);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", auth, async (req, res) => {
  const room = req.body.name;
  const content = req.body.content;

  // todo: here we need to pass the authencate user who are creater
  const creater = User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error:" + err));

  const newRoom = new Room({
    name: room,
    creater: creater[0],
    content: content,
  });
  console.log(newRoom);

  await newRoom
    .save()
    .then(() => res.json("Room Created"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.put("/:id", auth, async (req, res) => {
  const { name, content } = req.body;
  //build  room object
  const roomField = {};
  if (name) roomField.name = name;
  if (content) roomField.content = content;
  try {
    let room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ msg: "room not found" });

    //authenticate
    if (room.user.toString() !== req.user._id) {
      return res.status(401).json({ msg: "Unauthorized" });
    }
    room = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: roomField,
      },
      { new: true }
    );
    res.json(room);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    let room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ msg: "room not found" });

    //authenticate
    if (room.user.toString() !== req.user._id) {
      return res.status(401).json({ msg: "Unauthorized" });
    }
    await Room.findByIdAndRemove(req.params.id);
    res.json({ msg: "Room Removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
