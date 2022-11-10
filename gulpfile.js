'use strict';

const gulp = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const cssMinify = require('gulp-css-minify');

function buildStyles() {
  return gulp.src('./scss/**/*.scss')
    .pipe(scss().on('error', scss.logError))
    .pipe(cssMinify())
    .pipe(gulp.dest('./assets/css'));
};



exports.watch = function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
};

exports.default = function () {
  buildStyles();
  gulp.watch('./scss/**/*.scss', buildStyles);
}
