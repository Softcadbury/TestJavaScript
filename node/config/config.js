/* global process */
'use strict';

function config() {
    return {
        port: process.env.PORT || 5000,
        mongodbUrl: 'mongodb://localhost:27017/libraryApp'
    }
}

module.exports = config();
