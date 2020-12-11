const express = require('express');
const router = express.Router();
const Axios = require('axios');
const axios = Axios.create({validateStatus: null});

router.get('/:id', handleItem);
router.put('/:id', handleItem);
router.delete('/:id', handleItem);


async function handleItem(req, res) {
    let store = 3000 + req.params.id.charCodeAt(0) - 96;
    let url = 'http://127.0.0.1:' + store + '/multi/' + req.params.id;
    let multi_resp = await axios(url, {method: req.method, data: req.body});
    res.status(multi_resp.status);
    res.json(multi_resp.data);
}

module.exports = router;
