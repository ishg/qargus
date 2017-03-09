'use strict'

var gulp = require('gulp')

// Toolkit
// var filter = require('gulp-filter')
var print = require('gulp-print')
var source = require('vinyl-source-stream')
// var sourcemaps = require('gulp-sourcemaps')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
// var gutil = require('gulp-util')
var buffer = require('vinyl-buffer')
var transform = require('vinyl-transform')
var rename = require('gulp-rename')
var envify = require('envify/custom')
var rimraf = require('rimraf')
var cache = require('gulp-cached')

// Technologies
var babel = require('gulp-babel')
var babelify = require('babelify')
var sass = require('gulp-sass')
var nodemon = require('gulp-nodemon')
var browserSync = require('browser-sync')
var browserify = require('browserify')

var config = {
  js: {
    src: './src/client/js/app.js',
    outputDir: './dist/client/',
    outputFile: 'app.js'
  }
}

/// /////////////////////////////////
// WORKFLOW
/// /////////////////////////////////

gulp.task('default', ['dist'])

gulp.task('dist', ['clean'], function (done) {
  gulp.start('js', 'html', 'sass', 'assets')
})

gulp.task('serve', ['browser-sync', 'nodemon', 'watch'])

gulp.task('watch', ['html:watch', 'js:watch', 'sass:watch'])

/// /////////////////////////////////
// Tools
/// /////////////////////////////////

gulp.task('nodemon', function (done) {
  var started = false
  nodemon({
    script: './dist/server.js',
    ignore: ['dist/client/**'],
    watch: ['dist'],
    env: { 'NODE_ENV': 'development' }
  }).on('start', function () {
    if (!started) {
      started = true
      done()
    }
  })
})

gulp.task('browser-sync', function () {
  browserSync.init(null, {
    proxy: 'http://localhost:5000',
    files: ['dist/client/**/*.*'],
    port: 7000
  })
})

gulp.task('clean', function (done) {
  return rimraf('./dist', done)
})

/// /////////////////////////////////
// SASS
/// /////////////////////////////////

gulp.task('sass', function (done) {
  gulp.src('./src/client/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./dist/client/'))
    .on('end', done)
})

gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.scss', ['sass'])
})

/// /////////////////////////////////
// JS - ES6
/// /////////////////////////////////

gulp.task('js:server', function (done) {
  gulp.src([
    './src/**/*.js',
    '!./src/client/**/*.js'
  ])
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('./dist/'))
    .on('end', done)
})

function bundle (bundler) {
  bundler
    .bundle()
    .pipe(source(config.js.src))
    .pipe(buffer())
    .pipe(rename(config.js.outputFile))
    .pipe(gulp.dest(config.js.outputDir))
}

gulp.task('js:client', function () {
  var bundler = browserify(config.js.src)
    .transform('babelify', {
      presets: ['es2015']
    })
    .transform(envify({
      NODE_ENV: 'development'
    }))
  bundle(bundler)
})

gulp.task('js', ['js:server', 'js:client'])

gulp.task('js:watch', ['js:watchserver', 'js:watchclient'])

gulp.task('js:watchserver', function () {
  gulp.watch(['./src/**/*.js', '!./src/client/**/*.js'], ['js:server'])
})

gulp.task('js:watchclient', function () {
  gulp.watch('./src/client/**/*.js', ['js:client'])
})

/// /////////////////////////////////
// HTML
/// /////////////////////////////////

gulp.task('html', function (done) {
  gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist/'))
    .on('end', done)
})

gulp.task('html:watch', function () {
  gulp.watch('./src/**/*.html', ['html'])
})

/// /////////////////////////////////
// Assets
/// /////////////////////////////////

gulp.task('assets', function (done) {
  gulp.src('./src/client/assets/**/*.*')
    .pipe(gulp.dest('./dist/client/assets/'))

  gulp.src('./src/client/styles/fonts/**/*.*')
    .pipe(gulp.dest('./dist/client/fonts/'))
})
