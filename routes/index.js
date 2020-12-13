const express = require('express');
const cluster = require('cluster');
const router = express.Router();

router.get('/', function (req, res) {
    if (cluster.isMaster) {
        res.send('Masternode up & running')
    } else {
        res.send('Worker.ID: ' + cluster.worker.id);
    }
});

module.exports = router;
