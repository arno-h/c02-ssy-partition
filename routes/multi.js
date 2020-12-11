const express = require('express');
const cluster = require('cluster');
const database = require('../src/multi-database');
const router = express.Router();
const multiCollection = database.getCollection('multi');


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
