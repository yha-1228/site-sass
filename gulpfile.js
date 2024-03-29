'use strict';

const SASS_PATH = './src/sass/**/*.scss';
const CSS_PATH = './public/css/';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

sass.compiler = require('node-sass');

gulp.task('sass', () => {
  return gulp
    .src(SASS_PATH)
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(CSS_PATH));
});

gulp.task('sass:watch', () => {
  return gulp.watch(SASS_PATH, gulp.series('sass'));
});
