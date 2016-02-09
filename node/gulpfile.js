'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint'); // Check some coding rules
var jscs = require('gulp-jscs'); // Check some coding rules
var nodemon = require('gulp-nodemon');

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
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');

    var wiredepOptions = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../lib'
    };

    var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'], { read: false });

    var injectOptions = {
        ignorePath: '/public'
    };

    return gulp.src('./public/views/*.html')
        .pipe(wiredep(wiredepOptions))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./public/views'));
});

// Start the node server after each file modification
gulp.task('serve', ['check', 'inject'], function () {
    var options = {
        script: 'app.js',
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
