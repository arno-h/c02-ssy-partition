const express = require('express');
const cluster = require('cluster');
const database = require('../src/multi-database');
const router = express.Router();
const multiCollection = database.getCollection('multi');

// Enthält Buchstaben der eigenen Partition des Workers
const myPartition = 'abcdefghijklmnopqrstuvwxyz'[cluster.worker.id - 1]

router.get('/:id', getItem);
router.put('/:id', putItem);
router.delete('/:id', delItem);

// http://localhost:3005/multi/einhorn
// --------------------^                welches Service? Welche Partition?
//                      -----^          app-worker.js
//                            -------^  key == string
// key: a==3001, b==3002, c==3003, d==3004, e==3005, ..., z==3026
function getItem(req, res) {
    let item = multiCollection.findOne({key: req.params.id});
    if (item === null)
        res.status(404).end();
    else
        res.json(item.value);
}


function putItem(req, res) {
    // Sie könnten optional prüfen, ob wirklich ein passender Key geschrieben werden soll
    // In der Variable myPartition ist der Anfangsbuchstabe dieser Partition enthalten
}


function delItem(req, res) {

}

module.exports = router;
