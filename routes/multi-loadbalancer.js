const express = require('express');
const router = express.Router();
const Request = require('request');

router.get('/:id', handleItem);
router.put('/:id', handleItem);
router.delete('/:id', handleItem);


function handleItem(req, res) {

}

module.exports = router;
