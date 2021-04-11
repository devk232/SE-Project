const express = require('express');
const socket = require('socket.io');
const mongoose = require('mongoose');
const config = require("config");
const cookieParser  = require("cookie-parser")
const cors = require('cors');
const users = require('./routes/users');
const rooms=require('./routes/rooms');
const members=require('./routes/members');
const app = express();


if (!config.get("jwtPrivateKey")) {
  console.log("FATAL ERROR: JwtPrivateKey not defined");
  process.exit(1);
}
let mongoDB = "mongodb://127.0.0.1/SEdatabase";


mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("could not connect to mongoDB"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());


app.use('/users', users);
app.use('/room', rooms );
app.use('/join', members);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}` );
});
