'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint'); // Check some coding rules
var jscs = require('gulp-jscs'); // Check some coding rules

// Check coding rules
gulp.task('check', function () {
    gulp.src(['./src/**/*.js', './*.js'])
        .pipe(jscs())
        .pipe(jscs.reporter())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', { verbose: true }));
});

gulp.task('inject', function () {
    var wiredep = require('wiredep').stream;
    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib'
    };

    return gulp.src('./src/view/*.html')
        .pipe(wiredep(options))
        .pipe(gulp.dest('./src/views'));
});
