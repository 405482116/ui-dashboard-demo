const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const dashboradRouter = require('./routes/dashborad');

const app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', indexRouter);

app.use('/dashborad', dashboradRouter);


app.listen(3000, () => console.log('Example app listening on port 3000!'))