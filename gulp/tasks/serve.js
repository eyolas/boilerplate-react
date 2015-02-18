var gulp = require('gulp'),
  webserver = require('gulp-webserver'),
  config = require('../config').webserver;

gulp.task('serve', ['build'], function() {
  gulp.src(config.src)
    .pipe(webserver(config.serv));
});
