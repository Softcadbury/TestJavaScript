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

app.get('/', function (req, res) {
    res.render('index', { title: 'hello from node/handlebars' });
});

var router = express.Router();
app.use('/test', router);

router.route('')
    .get(function (req, res) {
        res.send('test');
    });

router.route('/sub')
    .get(function (req, res) {
        res.send('sub test');
    });