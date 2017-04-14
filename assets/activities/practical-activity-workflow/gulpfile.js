'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

// task to minify .scss files
gulp.task('sass', function () {
  return gulp.src('./source/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'));
});

// monitors file changes: base.scss
gulp.task('base', function () {
  return gulp.src('./source/scss/base.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'))
});

// runs the tasks automatically
gulp.task('sass:watch', function () {
  gulp.watch('./source/scss/base.scss', ['base']);
})
