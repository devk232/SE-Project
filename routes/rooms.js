const express = require("express");

const mongoose = require("mongoose");
const config = require("config");

const { Room } = require("../models/room");
const { valid } = require("joi");
const { response } = require("express");
const { User } = require("../models/user");
const router = express.Router();

router.post("/", async (req, res) => {
  const room = req.body.name;
  const content = req.body.content;
  
  //here we need to pass the authencate user who are creater
const creater=User.find()
  .then(users=>res.json(users))
  .catch(err=>res.status(400).json('Error:'+err));
 
  const newRoom = new Room({ name:room,creater:creater[0], content:content });
  console.log(newRoom);

  await newRoom
    .save()
    .then(() => res.json("Room Created"))
    .catch((err) => res.status(400).json('Error:' +err));
});


module.exports=router;