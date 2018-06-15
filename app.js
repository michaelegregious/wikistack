
const express = require('express');
const morgan = require('morgan');
const app = express();
const static 

app.use(morgan('dev'));
app.use(express.static('public'));

