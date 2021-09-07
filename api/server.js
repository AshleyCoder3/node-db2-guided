const express = require('express');
const helmet = require('helmet');

const fruitsRouter = require('./fruits/fruits-router.js');

const server = express();

// server.use(helmet()); // security
server.use(express.json());

server.use('/api/fruits', fruitsRouter);

server.use()

module.exports = server;
