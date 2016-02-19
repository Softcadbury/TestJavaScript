'use strict';

var config = require('./config/config');
var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');
var app = express();

// Middlewares configuration
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Handlebars configuration
app.set('views', 'views');
app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');

// Start application listening
app.listen(config.port, function (err) {
    console.log('running on ' + config.port);
});

// Regsiter routes
var indexRoutes = require('./server/routes/indexRoutes');
app.use('/', indexRoutes);

var testRoutes = require('./server/routes/testRoutes');
app.use('/test', testRoutes);

var userRoutes = require('./server/routes/userRoutes');
app.use('/users', userRoutes);

var userRoutes = require('./server/routes/accountRoutes');
app.use('/account', userRoutes);
