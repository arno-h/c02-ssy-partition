const express = require('express');
const router = express.Router();
const Axios = require('axios');
const axios = Axios.create({validateStatus: null});

router.get('/:id', getItemLB);
router.put('/:id', putItemLB);
router.delete('/:id', delItemLB);


async function getItemLB(req, res) {
    let key = req.params.id;
    // Partition-/Routing-Logik
    let worker_id = key.charCodeAt(0) - 96; // 'a' == 97 in Unicode/ASCII

    let port = 3000 + worker_id;
    let url = 'http://localhost:'+port+'/multi/'+key;
    let response = await axios.get(url);    // Request an Partition
    res.status(response.status);            // leitet Antwort weiter (an anrufenden Client)
    res.json(response.data);
}

async function putItemLB(req, res) {

}

async function delItemLB(req, res) {

}

module.exports = router;
