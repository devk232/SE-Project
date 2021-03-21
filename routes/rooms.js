const express = require("express");

const mongoose = require("mongoose");
const config = require("config");

const { Room } = require("../models/room");
const { valid } = require("joi");
const { response } = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const room = req.body.name;
  const content = req.body.content;
  const newRoom = new Room({ name:room, content:content });
  console.log(newRoom);

  await newRoom
    .save()
    .then(() => res.send("Room Created"))
    .catch((err) => res.status(400).send("Error occured!", err));
});

module.exports=router;