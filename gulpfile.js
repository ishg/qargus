'use strict'

var gulp = require('gulp')

// Toolkit
var clean = require('gulp-clean')
// var filter = require('gulp-filter')
// var print = require('gulp-print')
var source = require('vinyl-source-stream')
// var sourcemaps = require('gulp-sourcemaps')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
// var gutil = require('gulp-util')
var buffer = require('vinyl-buffer')
var transform = require('vinyl-transform')
var rename = require('gulp-rename')
var envify = require('envify/custom')

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

gulp.task('build', []) // TODO

gulp.task('serve', ['browser-sync', 'nodemon', 'watch'])

gulp.task('watch', ['html:watch', 'js:watch', 'sass:watch'])

gulp.task('dist', ['clean', 'js', 'html', 'sass'])

gulp.task('clean', function (done) {
  gulp.src('./dist', {read: false})
    .pipe(clean({ force: true }))
    .on('end', done)
})

/// /////////////////////////////////
// Tools
/// /////////////////////////////////

gulp.task('nodemon', function (done) {
  var started = false
  nodemon({
    script: './dist/server.js',
    ignore: ['./dist/client'],
    env: { 'NODE_ENV': 'development' }
  }).on('start', function () {
    if (!started) {
      done()
      started = true
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
    .pipe(uglify())
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

gulp.task('js:watch', function () {
  gulp.watch('./src/**/*.js', ['js'])
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
