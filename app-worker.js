const express = require('express');
const logger = require('morgan');

// Generic application setup
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Load routes into variables
const index = require('./routes/index');
const multi = require('./routes/multi');
const peer = require('./routes/peer');

// Routes
app.use('/', index);
app.use('/multi', multi);
app.use('/peer', peer);

module.exports = app;
