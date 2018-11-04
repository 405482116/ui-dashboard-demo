const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index');
const hbs = require('hbs');

const app = express();
app.use(bodyParser.json());

hbs.registerPartials(__dirname + '/views/common');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', indexRouter);


app.listen(3000, () => console.log('Example app listening on port 3000!'))