'use strict';

var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function () {
  del('./dist/css');
});

gulp.task('move-css',['clean'], function () {
  return gulp.src('./source/css/style.css')
         .pipe(gulp.dest('./dist/css'));
});

gulp.task('move-js', function () {
  return gulp.src('./source/js/index.js')
         .pipe(gulp.dest('./dist/js'));
});

gulp.task('background', function () {
  gulp.watch('./source/css/style.css',['move-css']);
  gulp.watch('./source/js/index.js',['move-js']);
})
