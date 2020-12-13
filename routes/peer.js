const express = require('express');
const cluster = require('cluster');
const Axios = require('axios');
const axios = Axios.create({validateStatus: null});
const database = require('../src/peer-database');
const peerCollection = database.getCollection('peer');
const router = express.Router();

// Enthält Buchstaben der eigenen Partition des Workers
const myPartition = 'abcdefghijklmnopqrstuvwxyz'[cluster.worker.id - 1]

router.get('/:id', getItem);
router.put('/:id', putItem);
router.delete('/:id', delItem);


function getItem(req, res) {

}


function putItem(req, res) {

}


function delItem(req, res) {

}


module.exports = router;
