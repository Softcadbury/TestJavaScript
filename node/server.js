/* global process */
'use strict';

var express = require('express');
var handlebars = require('express-handlebars');

var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', 'views');
app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.listen(port, function (err) {
    console.log('running on ' + port);
});

var indexRouter = require('./server/routes/indexRouter');
app.use('/', indexRouter);

var testRouter = require('./server/routes/testRouter');
app.use('/test', testRouter);
