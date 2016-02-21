'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var updater = require('./server/utils/updater');

// Updates the current data
gulp.task('update', () => {
    updater.updateData('http://www.football-data.co.uk/mmz4281/1516/E0.csv', 'PremierLeague/2015-2016');
});

// Updates all data
gulp.task('updateall', ['update'], () => {
    updater.updateData('http://www.football-data.co.uk/mmz4281/1415/E0.csv', 'PremierLeague/2014-2015');
});

// Start the node server
gulp.task('start', function () {
    var options = {
        script: 'server/app.js',
        delayTime: 1,
        env: {
            'PORT': 5000
        },
        watch: ['./*.js', './server/*.js']
    };

    return nodemon(options).on('restart', function () {
        console.log('Restarting...');
    });
});