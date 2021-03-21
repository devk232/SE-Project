const mongoose = require("mongoose");
const Joi = require("joi");
const config = require("config");
const jwt = require("jsonwebtoken");

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  content:{
       type:String, 
       required:true
  }
 
});
const Room = mongoose.model("Room", roomSchema);
exports.Room = Room;

