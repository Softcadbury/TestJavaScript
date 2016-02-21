'use strict';

var express = require('express');
var router = express.Router();

router.route('')
    .get(function (req, res) {
        res.render('index', { title: 'hello from node/handlebars' });
    });

module.exports = router;
