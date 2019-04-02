'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');

// Get one .styl file and render
gulp.task('stylus', function () 
{
	gulp.src('./css/styl/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./css/'))
});

gulp.task('watch', function()
{
    gulp.watch('./css/styl/*.styl', gulp.series('stylus'));
});