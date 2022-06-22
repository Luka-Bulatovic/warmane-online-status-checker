var express = require('express');
var path = require('path');
var cors = require('cors')

var app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + '/../', 'public')));


var indexRouter = require('../routes/index');

app.use('/', indexRouter);

module.exports = app;
