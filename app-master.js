const express = require('express');
const logger = require('morgan');

// Generic application setup
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Load routes into variables
const index = require('./routes/index');
const mono = require('./routes/mono');
const multi_loadbalancer = require('./routes/multi-loadbalancer');

// Routes
app.use('/', index);
app.use('/mono', mono);
app.use('/multi-lb', multi_loadbalancer);

module.exports = app;
