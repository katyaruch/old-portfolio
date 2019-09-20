'use strict';

/* --------- plugins --------- */

var
  gulp = require('gulp'),
  less = require('gulp-less'),
  autoprefixer = require('autoprefixer'),
  flexboxfixer = require('postcss-flexbugs-fixes'),
  postcss = require('gulp-postcss'),
  cssnano = require('cssnano'),
  rename = require('gulp-rename'),
  pug = require('gulp-pug'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  browserSync = require('browser-sync')

/* --------- paths --------- */

var
  paths = {

    style: {
      src: ['node_modules/normalize.css/normalize.css',
            'node_modules/swiper/dist/css/swiper.min.css'],
      location: 'app/less/style.less',
      watch: [
        'app/less/*.less',
        'app/less/*/*.less',
        'app/less/*/**/*.less'
        ],
      destination: 'app/css'
    },

    pug: {
      pages: 'app/pug/pages/*.pug',
      watch: ['app/pug/pages/*.pug',
              'app/pug/blocks/*.pug',
              'app/pug/layouts/*.pug',
              'app/pug/icons/*.pug',
              'app/pug/mixins.pug'],
      convertFolder: 'app'
    },

    js: {
      src: ['node_modules/swiper/dist/js/swiper.min.js'],
      watch: 'app/js/*.js',
      destination: 'app/js'
    }
  };

/* --------- style --------- */

gulp.task('libs-css', function() {
  return gulp.src(paths.style.src)
    .pipe(concat('libs.css'))
    // .pipe(postcss([
    //     cssnano({
    //       safe: true
    //     })
    //   ]))
    .pipe(gulp.dest(paths.style.destination))
    .pipe(browserSync.reload({stream:true}))
})

gulp.task('style', function () {
  return gulp.src(paths.style.location)
    .pipe(less())
    .pipe(postcss([
    	flexboxfixer,
      autoprefixer({
        overrideBrowserslist: [
          'last 4 version',
          'last 4 Chrome versions',
          'last 4 Firefox versions',
          'last 4 Opera versions',
          'last 2 Edge versions'
        ]
      }),
      cssnano({
        safe: true
      })
    ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(paths.style.destination))
    .pipe(browserSync.reload({stream:true}))
});

/* --------- pug --------- */

gulp.task('pug', function() {
  return gulp.src(paths.pug.pages)
    .pipe(pug({
      pretty: '\t',
    }))
    .pipe(gulp.dest(paths.pug.convertFolder))
    .pipe(browserSync.reload({stream:true}))
});

/* --------- js --------- */


gulp.task('js', function() {
  return gulp.src(paths.js.watch)
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('libs-js', function() {
  return gulp.src(paths.js.src)
    .pipe(concat('libs.js'))
    // .pipe(uglify())
    .pipe(gulp.dest(paths.js.destination))
    .pipe(browserSync.reload({stream:true}))
});


// /* --------- browser-sync --------- */

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: 'app',
      proxy: 'katyaruch.github.io',
      notify: false,
    }
  });
});

/* --------- watch --------- */

gulp.task('watch', ['style', 'pug', 'js'], function () {
  gulp.watch(paths.style.watch, ['style']);
  gulp.watch(paths.pug.watch, ['pug']);
  gulp.watch(paths.js.watch, ['js']);
});

/* --------- default --------- */

gulp.task('default', ['libs-css', 'style', 'pug', 'js', 'libs-js','browser-sync', 'watch']);