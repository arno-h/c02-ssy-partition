const express = require('express');
const router = express.Router();
const Axios = require('axios');
const axios = Axios.create({validateStatus: null});

router.get('/:id', handleItem);
router.put('/:id', handleItem);
router.delete('/:id', handleItem);


function handleItem(req, res) {

}

module.exports = router;
