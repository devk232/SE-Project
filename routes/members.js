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
  if (errors) return res.status(400).json({errors:errors.array()});
 
  try {
    const {name, rooms}=req.body;
    
    let room=await Room.findById(rooms);
    if(room){
       
    const newMember = new Room({
      name,
      room:req.body.room,
      user:req.user._id
    });
    room.members.push(newMember);
    await room.save();
    res.json(newMember);
    }
   
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
