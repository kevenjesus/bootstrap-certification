// comma-first style

'use strict';

// plugins
const gulp    = require( 'gulp' )
    , sass    = require( 'gulp-sass' )
    , notify  = require( 'gulp-notify' )
;

// task to compile bundle.scss files
gulp.task( 'sass', function() {
  return gulp.src( './source/assets/scss/bundle.scss' )
    .pipe( sass() )
    .on( 'error', notify.onError( { title:'erro ao compilar', message:'<%= error.message %>' } ) )
    .pipe( gulp.dest( './source/assets/css/' ) )
});

// task watch
gulp.task( 'sass:watch', function() {
  gulp.watch( './source/assets/scss/**/*.scss', [ 'sass' ] );
});

// task default
gulp.task( 'default', [ 'sass:watch' ] );
