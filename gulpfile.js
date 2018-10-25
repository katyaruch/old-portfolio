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
  browserSync = require('browser-sync').create();

/* --------- paths --------- */

var
  paths = {

    style: {
      src: './app/less',
      location: './app/less/style.less',
      watch: [
          './app/less/*.less',
          './app/less/*/*.less',
          './app/less/*/**/*.less',
      ],
      entryPoint: 'css/style.css',
      destination: 'css'
    },

    pug: {
      pages: './app/pug/pages/*.pug',
      watch: ['./app/pug/pages/*.pug',
              './app/pug/blocks/*.pug',
              './app/pug/layouts/*.pug',
              './app/pug/icons/*.pug',
              './app/pug/mixins.pug'],
      convertFolder: './'
    }
  };

/* --------- style --------- */

gulp.task('style', function () {
  return gulp.src(paths.style.location)
    .pipe(less())
    .pipe(postcss([
    	flexboxfixer,
      autoprefixer({
        browsers: [
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
    .pipe(gulp.dest(paths.style.destination));
});

/* --------- pug --------- */

gulp.task('pug', function() {
  gulp.src(paths.pug.pages)
    .pipe(pug({
      pretty: '\t',
    }))
    .pipe(gulp.dest(paths.pug.convertFolder));
});

/* --------- watch --------- */

gulp.task('watch', ['style', 'pug'], function () {
  gulp.watch(paths.style.watch, ['style']);
  gulp.watch(paths.pug.watch, ['pug']);
});

// /* --------- browser-sync --------- */

// gulp.task('browser-sync', function() {
//   browserSync.init({
//     server: {
//       baseDir:"./app/templates"
//     }
//   })
// });

/* --------- default --------- */

gulp.task('default', ['style', 'pug', 'watch']);