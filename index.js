const express = require('express');
const socket = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local');
const http = require('http');
const users = require('./routes/users');
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
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`listening on port {POST}` );
});
