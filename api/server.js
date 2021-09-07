const express = require('express');
//const helmet = require('helmet');

const fruitsRouter = require('./fruits/fruits-router.js');

const server = express();

//server.use(helmet()); // security
server.use(express.json());

server.use('/api/fruits', fruitsRouter);

//***********************500 error middleware***********//
//eslint-disable-next-line
server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        devMessage: 'Something bad inside the server!'
    });
});

module.exports = server;
