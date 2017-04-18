// comma-first style

'use strict';

// plugins
const gulp    = require( 'gulp' )
    , sass    = require( 'gulp-sass' )
    , notify  = require( 'gulp-notify' )
;

// task to compile style.scss files
gulp.task( 'sass', function() {
  return gulp.src( './scss/_style.scss' )
    .pipe( sass() )
    .on( 'error', notify.onError( { title:'erro ao compilar', message:'<%= error.message %>' } ) )
    .pipe( gulp.dest( './css' ) )
});

// task watch
gulp.task( 'sass:watch', function() {
  gulp.watch( './scss/**/*.scss', [ 'sass' ] );
});

// task default
gulp.task( 'default', [ 'sass', 'sass:watch' ] );
