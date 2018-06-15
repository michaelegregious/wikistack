
const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const layout = require('./views/layout')
const PORT = 3000;
const routes = require('./routes/router');


app.use('/', routes);
app.use(morgan('dev'));
app.use(express.static('public'));





app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
});