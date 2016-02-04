'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect'); // Run a local dev server
var openBrowser = require('gulp-open'); // Open a URL in a web browser
var jshint = require('gulp-jshint'); // Check some coding rules
var jscs = require('gulp-jscs'); // Check some coding rules

var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        dist: './dist'
    }
};

// Check coding rules
gulp.task('check', function () {
    gulp.src(['./src/**/*.js', './*.js'])
        .pipe(jscs())
        .pipe(jscs.reporter())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', { verbose: true }))
});

// Build application in dist folder
gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

// Start a local dev server
gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

// Open the browser
gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
        .pipe(openBrowser({ uri: config.devBaseUrl + ':' + config.port + '/' }));
});

// Update browser when changes are detected
gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html']);
})

// Default task
gulp.task('default', ['open', 'html', 'watch']);
