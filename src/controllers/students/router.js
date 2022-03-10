const express = require('express')

const list = require('./list');

const router = express.Router({ mergeParams: true });

router.get('/', list);

module.exports = router;