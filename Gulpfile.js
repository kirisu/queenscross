var gulp = require('gulp');
var postcss = require('gulp-postcss');
var reporter = require('postcss-reporter');
var stylelint = require('stylelint');
var scss = require('postcss-scss');
var autoprefixer = require('autoprefixer');

gulp.task('sass', function () {
  return gulp.src(['_frontend/sass/**/*.scss'])
    .pipe(postcss([
      stylelint(),
      reporter({ clearMessages: true }),
      autoprefixer({ browsers: ['last 2 versions'] })
    ], { syntax: scss }))
    .pipe( gulp.dest( '_sass' ) );
});

gulp.task('default', ['sass']);
