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
var pugLinter = require('gulp-pug-linter');

var destJS = './public/js/';
var destCSS = './public/css/';
var vendor = './src/vendor/';
var scripts = './src/scripts/';
var styles = './src/styles/';

// 

gulp.task('mocha', function(){
  gulp.src(['./test/HolidayTest.js', './test/OpenTest.js', './test/TimeTest.js'], {read: false})
      .pipe(mocha({reporter: 'nyan'}))
});

gulp.task('scrollbar', function() {
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


gulp.task('lightbox', function() {
  return gulp.src([vendor + '/imageLightbox/imagelightbox.js', scripts + 'myLightbox.js'])
    .pipe(concat('./myImageLightbox.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(destJS));
});

gulp.task('coffee', function () {
	return gulp.src([scripts + 'overlay.coffee', scripts + 'ad.coffee'])
  .pipe(maps.init())
  .pipe(coffee())
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(maps.write())
  .pipe(gulp.dest(destJS));
});


gulp.task('css', function () {
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

gulp.task('json', function() {
	return gulp.src('./public/data/pictures.json')
	.pipe(jsonlint())
	.pipe(jsonlint.reporter());
});

gulp.task('pug', function(){
	return gulp.src('./views/*.pug')
	.pipe(pugLinter())
	.pipe(pugLinter.reporter())
});

gulp.task('watch', function() {
  gulp.watch('./src/styles/*.scss', ['css']);
});

gulp.task('default', ['mocha', 'css', 'coffee', 'json', 'valid'], function () {
	console.log("All tasks completed");
});
