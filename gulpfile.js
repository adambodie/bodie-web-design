'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');
var jsValidate = require('gulp-jsvalidate');
var jsonlint = require("gulp-jsonlint");
 
var destJS = './public/js/';
var destCSS = './public/css/';


gulp.task('scrollMe', function() {
  return gulp.src(['./public/scroll-up-bar/scroll-up-bar.js', './public/js/scroll.js'])
    .pipe(concat('./scrollbar.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(destJS));
});

gulp.task('tickerMe', function() {
  return gulp.src(['./public/vticker/jquery.vticker.js', './public/js/ticker.js'])
    .pipe(concat('./vticker.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(destJS));
});

gulp.task('openDate', function() {
  return gulp.src(['./public/js/open.js', './public/js/date.js'])
    .pipe(concat('./open-on-date.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(destJS));
});

gulp.task('imageLightbox', function() {
  return gulp.src(['./public/js/imagelightbox.js', './public/js/myLightbox.js'])
    .pipe(concat('./myImageLightbox.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(destJS));
});

gulp.task('minify', function () {
	return gulp.src(['./' + destJS + 'feature.js', './' + destJS + 'overlay.js', './' + destJS + 'locations.js', './' + destJS + 'howManyDaysAgo.js', './' + destJS + 'time.js', './' + destJS + 'ad.js'])
	.pipe(rename({suffix: '.min'}))
	.pipe(uglify())
	.pipe(gulp.dest(destJS));
});

gulp.task('sassMe', function () {
	return gulp.src('./public/css/main.scss')
	.pipe(maps.init())
	.pipe(sass())
	.pipe(maps.write('./'))
	.pipe(gulp.dest(destCSS));
});

gulp.task('valid', function () {
    return gulp.src('./' + destJS + '*.js')
    .pipe(jsValidate());
});

gulp.task('default', ['valid', 'scrollMe', 'tickerMe', 'openDate', 'imageLightbox', 'minify', 'sassMe'], function () {
	console.log("All tasks completed");
});