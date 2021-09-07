const express = require('express');
const helmet = require('helmet');

const fruitsRouter = require('./fruits/fruits-router.js');

const server = express();

// server.use(helmet()); // security
server.use(express.json());

server.use('/api/fruits', fruitsRouter);

server.use((err, req, res, next) => { // e
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = server;
