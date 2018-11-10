const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index');
const addRouter = require('./routes/add');
const deleteRouter = require('./routes/delete');
const tableRouter = require('./routes/table');
const menuRouter = require('./routes/menu');
const hbs = require('hbs');

const app = express();
app.use(bodyParser.json());






hbs.registerPartials(__dirname + '/views/common');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', indexRouter);
app.use('/', addRouter);
app.use('/', deleteRouter);
app.use('/', tableRouter);
app.use('/', menuRouter);


// 404 error
const errorData_404 = {
    status: '404',
    msg: 'Not Found!',
};
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    res.end(JSON.stringify(errorData_404));
});

// 500 error
const errorData_500 = {
    status: '500',
    msg: 'Internal server error',
};
app.use((err, req, res, next) => {
    errorData_500.msg = err.message;
    res.end(JSON.stringify(errorData_500));
});


app.listen(3000, () => console.log('listening on port 3000!'))