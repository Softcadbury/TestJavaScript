'use strict';

var config = require('../../config/config');
var express = require('express');
var router = express.Router();

router.route('/register')
    .get(function (req, res) {
        res.render('account/register');
    })
    .post(function (req, res) {
        console.log(req.body);
    });
    
router.route('/connect')
    .get(function (req, res) {
        res.render('account/connect');
    })
    .post(function (req, res) {
        console.log(req.body);
    });

module.exports = router;
