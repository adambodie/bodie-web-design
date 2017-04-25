'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var maps = require('gulp-sourcemaps');
var jsValidate = require('gulp-jsvalidate');
var jsonlint = require('gulp-jsonlint');
var mocha = require('gulp-mocha');
var csso = require('gulp-csso');
var iff = require('gulp-if');

var destJS = './public/js/';
var destCSS = './public/css/';
var vendor = './src/vendor/';
var scripts = './src/scripts/';
var styles = './src/styles/';

gulp.task('runMochaTests', function(){
  gulp.src(['./test/HolidayTest.js', './test/OpenTest.js', './test/TimeTest.js'], {read: false})
      .pipe(mocha({reporter: 'nyan'}))
});

gulp.task('createScrollBar', function() {
  return gulp.src([vendor + 'scroll-up-bar/scroll-up-bar.js', scripts + '/scroll.js'])
    .pipe(concat('./scrollbar.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(destJS));
});

gulp.task('createVticker', function() {
  return gulp.src([vendor + '/vticker/jquery.vticker.js', scripts + '/ticker.js'])
    .pipe(concat('./vticker.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(destJS));
});


gulp.task('createImageLightbox', function() {
  return gulp.src([vendor + '/imageLightbox/imagelightbox.js', scripts + 'myLightbox.js'])
    .pipe(concat('./myImageLightbox.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(destJS));
});

gulp.task('overlay', function () {
	return gulp.src(scripts + 'overlay.coffee')
  .pipe(maps.init())
  .pipe(coffee())
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(maps.write())
  .pipe(gulp.dest(destJS));
});


gulp.task('minify', function () {
	return gulp.src([scripts + 'locations.js'])
	.pipe(rename({suffix: '.min'}))
	.pipe(uglify())
	.pipe(gulp.dest(destJS));
});

gulp.task('createAppCss', function () {
	return gulp.src([styles + 'normalize.css', styles + 'main.scss'])
	.pipe(maps.init())
	.pipe(iff('main.scss', sass()))
	.pipe(concat('./app.css'))
	.pipe(rename({suffix: '.min'}))
	.pipe(csso())
	.pipe(maps.write('./'))
	.pipe(gulp.dest(destCSS));
});

gulp.task('valid', function () {
    return gulp.src(scripts + '*.js')
    .pipe(jsValidate());
});

gulp.task('watch', function() {
  gulp.watch('./src/styles/*.scss', ['createAppCss']);
});

gulp.task('default', ['runMochaTests', 'minify', 'createAppCss', 'valid'], function () {
	console.log("All tasks completed");
});
