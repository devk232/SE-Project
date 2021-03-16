const express = require('express');
const socket = require('socket.io')
const http = require('http');
const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`listening on port {POST}` );
});
