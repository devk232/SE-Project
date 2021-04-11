const mongoose = require("mongoose");
const Joi = require("joi");
const config = require("config");
const jwt = require("jsonwebtoken");


const memberSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users", 
  },
  name:{
      type:String,
      required:true
  },
  room:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"rooms"
  }
});
const Member = mongoose.model("Member", memberSchema);
exports.Member = Member;

