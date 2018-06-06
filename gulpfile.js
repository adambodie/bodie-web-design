'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const coffee = require('gulp-coffee');
const maps = require('gulp-sourcemaps');
const jsValidate = require('gulp-jsvalidate');
const jsonlint = require('gulp-jsonlint');
const mocha = require('gulp-mocha');
const csso = require('gulp-csso');
const iff = require('gulp-if');
const pugLinter = require('gulp-pug-linter');

const destJS = './public/js/';
const destCSS = './public/css/';
const vendor = './src/vendor/';
const scripts = './src/scripts/';
const styles = './src/styles/';

// 

gulp.task('mocha', () =>{
  gulp.src(['./test/HolidayTest.js', './test/OpenTest.js', './test/TimeTest.js'], {read: false})
      .pipe(mocha({reporter: 'nyan'}))
});

gulp.task('scrollbar', () => {
  return gulp.src([vendor + 'scroll-up-bar/scroll-up-bar.js', scripts + '/scroll.js'])
    .pipe(concat('./scrollbar.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(destJS));
});

gulp.task('createVticker', () => {
  return gulp.src([vendor + '/vticker/jquery.vticker.js', scripts + '/ticker.js'])
    .pipe(concat('./vticker.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(destJS));
});


gulp.task('lightbox', () => {
  return gulp.src([vendor + '/imageLightbox/imagelightbox.js', scripts + 'myLightbox.js'])
    .pipe(concat('./myImageLightbox.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(destJS));
});

gulp.task('css', () => {
	return gulp.src([styles + 'normalize.css', styles + 'main.scss'])
	.pipe(maps.init())
	.pipe(iff('main.scss', sass()))
	.pipe(concat('./app.css'))
	.pipe(rename({suffix: '.min'}))
	.pipe(csso())
	.pipe(maps.write('./'))
	.pipe(gulp.dest(destCSS));
});

gulp.task('valid', () => {
    return gulp.src(scripts + '*.js')
    .pipe(jsValidate());
});

gulp.task('json', () => {
	return gulp.src('./public/data/pictures.json')
	.pipe(jsonlint())
	.pipe(jsonlint.reporter());
});

gulp.task('pug', () => {
	return gulp.src('./views/*.pug')
	.pipe(pugLinter())
	.pipe(pugLinter.reporter())
});

gulp.task('watch', () => {
  gulp.watch('./src/styles/*.scss', ['css']);
});

gulp.task('default', ['mocha', 'css', 'json', 'valid'], () => {
	console.log("All tasks completed");
});
