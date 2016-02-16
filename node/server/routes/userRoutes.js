'use strict';

var config = require('../../config/config');
var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;

router.route('/addUser')
    .get(function (req, res) {
        mongodb.connect(config.mongodbUrl, function (err, db) {
            var users = [
                {
                    name: 'user1'
                }, {
                    name: 'user2'
                }];

            var collection = db.collection('users');
            collection.insertMany(users, function (err, results) {
                res.send(results);
                db.close();
            });
        });
    });

module.exports = router;
