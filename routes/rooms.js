const express = require("express");

const mongoose = require("mongoose");
const config = require("config");
const auth = require("../middleware/auth");
const { Room } = require("../models/room");
const { Joi } = require("joi");
const { response } = require("express");
const router = express.Router();
const { User, validates, validateUser } = require("../models/user");

router.get('/', auth, async(req, res)=>{
      
    try {
      const rooms=await Room.find({user:req.user._id});
      res.json(rooms);

      
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
      
    }


});

router.post("/", auth, async (req, res) => {
  const { errors } = validateUser(req.body);
  if (errors) return res.status(400).json({  });
   const {name, content, member}=req.body;

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

router.put('/:id', auth, async(req, res)=>{
    
      const {name, content}=req.body;
      //build  room object 
      const roomField={};
      if(name) roomField.name=name;
      if(content) roomField.content=content;
      try {
            let room = await Room.findById(req.params.id);
            if (!room) return res.status(404).json({ msg: "room not found" });

            //authenticate
            if (room.user.toString() !== req.user._id) {
              return res.status(401).json({ msg: "Unauthorized" });
            }
           room=await Room.findByIdAndUpdate(req.params.id,
            {
                $set:roomField
            },{new:true});
            res.json(room);
      } catch (err) {
         console.error(err.message);
         res.status(500).send('Server Error');
        
      }
});

router.delete('/:id', auth, async(req, res)=>{
  try {
    let room =await Room.findById(req.params.id);
    if(!room) return res.status(404).json({msg:"room not found"});
    

    //authenticate 
    if(room.user.toString()!==req.user._id){
      return res.status(401).json({msg:"Unauthorized"});
    }
    await Room.findByIdAndRemove(req.params.id);
    res.json({msg:"Room Removed"});
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
    
  }
});

module.exports = router;
