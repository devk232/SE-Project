const mongoose = require("mongoose");
const Joi = require("joi");
const config = require("config");
const jwt = require("jsonwebtoken");

const meetSchema = new mongoose.Schema({
  room_id: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    maxlength: 1024,
    minlength: 5,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
const Meet = mongoose.model("Room", meetSchema);

function validateUser(user) {
  const schema = Joi.object({
    id: Joi.string().min(3).max(30).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    password: Joi.string().required(),
  });
  return schema.validate(user);
}

//Meet Validation
function validates(user) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required(),
  });
  return schema.validate(user);
}

exports.Meet = Meet;
exports.validates = validates;
exports.validateUser = validateUser;
