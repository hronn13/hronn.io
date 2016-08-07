var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  cssmin = require('gulp-cssmin'),
  rename = require('gulp-rename');

gulp.task('minifycss', function() {
  gulp.src('index.css')
    .pipe(cssmin())
    .pipe(gulp.dest('dist'))
});

gulp.task('minifyjs', function() {
  return gulp.src('index.js')
    .pipe(uglify({mangle: false}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
})

gulp.task('default', ['minifycss', 'minifyjs', 'watch']);
