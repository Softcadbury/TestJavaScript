'use strict';

var config = require('./config/config');
var express = require('express');
var handlebars = require('express-handlebars');
var app = express();

app.use(express.static('public'));
app.set('views', 'views');
app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.listen(config.port, function (err) {
    console.log('running on ' + config.port);
});

var indexRoutes = require('./server/routes/indexRoutes');
app.use('/', indexRoutes);

var testRoutes = require('./server/routes/testRoutes');
app.use('/test', testRoutes);

var userRoutes = require('./server/routes/userRoutes');
app.use('/users', userRoutes);
