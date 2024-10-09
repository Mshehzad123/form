var express = require('express');
var indexRouter = require('./routes/index');
const cors = require('cors');
require('./routes/conn');
var app = express();
app.use(express.json());
// view engine setup
app.use(cors());

app.use(express.json());
app.use('/user', indexRouter);
app.use('/book', indexRouter);
// catch 404 and forward to error handler

// error handler

module.exports = app;
