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
const multi = require('./routes/multi');
const multi_loadbalancer = require('./routes/multi-loadbalancer');
const peer = require('./routes/peer');

// Routes
app.use('/', index);
app.use('/mono', mono);

for (let i of 'abcdefghijklmnopqrstuvwxyz') {
    app.use('/multi-'+i, multi(i));
}
app.use('/multi-lb', multi_loadbalancer);

for (let i of 'abcdefghijklmnopqrstuvwxyz') {
    app.use('/peer-'+i, peer(i));
}

module.exports = app;
