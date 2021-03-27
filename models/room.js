const mongoose = require("mongoose");
const Joi = require("joi");
const config = require("config");
const jwt = require("jsonwebtoken");

const roomSchema =  mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: true,
    
  },
  content: {
    type: String,
    required: true,
  },
    members:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Members"
      }
    ]
});
const Room = mongoose.model("Room", roomSchema);
exports.Room = Room;

