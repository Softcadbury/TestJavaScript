'use strict';

var config = require('../../config/config');
var express = require('express');
var router = express.Router();

router.route('/createAccount')
    .get(function (req, res) {
        res.render('createAccount', { title: 'create an account' });
    })
    .post(function (req, res) {
        console.log(req.body);
    });

module.exports = router;
