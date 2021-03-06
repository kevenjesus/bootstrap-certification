'use strict';

// require functions
var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');

// task to compile .scss files
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

// monitors file changes: layout.scss
gulp.task('layout', function () {
  return gulp.src('./source/scss/layout.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'))
});

// monitors file changes: style.scss
gulp.task('style', function () {
  return gulp.src('./source/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'))
});

// monitors file changes: index.html
gulp.task('html', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

// runs the tasks automatically
gulp.task('sass:watch', function () {
  gulp.watch('./source/scss/base.scss', ['base']);
  gulp.watch('./source/scss/layout.scss', ['layout']);
  gulp.watch('./source/scss/style.scss', ['style']);
})
