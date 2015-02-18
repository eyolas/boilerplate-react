
/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/serve.js watches and reloads compiled files
*/

var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', ['setWatch', 'serve'], function() {
  gulp.watch(config.less.watch, ['less']);
  gulp.watch(config.markup.src, ['markup']);
});
