'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint'); // Check some coding rules
var jscs = require('gulp-jscs'); // Check some coding rules
var wiredep = require('wiredep').stream; // Wire Bower dependencies
var inject = require('gulp-inject'); // Inject file references into views
var nodemon = require('gulp-nodemon'); // Start the node application

var jsFiles = ['./public/js/*.js', './*.js'];

// Check coding rules
gulp.task('check', function () {
    gulp.src(jsFiles)
        .pipe(jscs())
        .pipe(jscs.reporter())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', { verbose: true }));
});

// Inject bower packages in views
gulp.task('inject', function () {
    var wiredepOptions = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../lib'
    };

    var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'], { read: false });
    var injectOptions = {
        ignorePath: '/public'
    };

    return gulp.src('./views/*.hbs')
        .pipe(wiredep(wiredepOptions))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./views'));
});

// Start the node server and restart it after each js file modification
gulp.task('serve', ['check', 'inject'], function () {
    var options = {
        script: 'server.js',
        delayTime: 1,
        env: {
            'PORT': 5000
        },
        watch: jsFiles
    };

    return nodemon(options).on('restart', function () {
        console.log('Restarting...');
    });
});
