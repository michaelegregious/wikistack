

const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');

router.get('/', (req, res, next) => {
    res.send('arrived at GET /wiki/');
});

router.post('/', (req, res, next) => {
    res.send('arrived at POST /wiki/');
});

router.get('/add', (req, res) => {
    res.send(addPage());
});

module.exports = router;