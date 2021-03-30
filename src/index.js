const express = require('express');
const morgan = require('morgan');
const path = require('path');

const config = require('./config');
const db = require('./config/db');
const publicTravelsRouter = require('./routes/travelsRouter');

const app = express();

db.authenticate()
  .then(() => console.log('Database connected'))
  .catch((error) => console.log(error.message));

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'views/'));
app.set('view engine', 'pug');

app.use('/', publicTravelsRouter);


app.listen(config.port, console.log(`Server running at http://localhost:${config.port}`));