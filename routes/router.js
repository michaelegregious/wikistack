

const express = require('express');
const router = express.Router();
const htmlLayout = require('../views/layout');
let content = '';

router.get('/', (req, res, next) => {
    res.send(htmlLayout(''));
});

module.exports = router;