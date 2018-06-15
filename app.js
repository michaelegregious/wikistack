
const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const layout = require('./views/layout')
const PORT = 3000;
const routes = require('./routes/router');
const models = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

app.use('/', routes);
app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

app.use(morgan('dev'));
app.use(express.static('public'));


// db.authenticate().
//     then( () => {
//     console.log('Connected to the database');
// });

const init = async() => {
    await models.User.sync({ force: true })
    await models.Page.sync({ force: true })

    app.listen(PORT, () => {
        console.log(`App listening in port ${PORT}`);
    });
}

init();

