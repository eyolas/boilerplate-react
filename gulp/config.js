var dest = './build',
  src = './src';

module.exports = {
  clean: {
    files: [dest + '/**/*']
  },
  webserver: {
    src: dest,
    serv: {
      livereload: true,
      port: 9001,
      fallback: 'index.html',
      open: true
    }
  },
  less: {
    src: src + '/less/main.less',
    watch: [
      src + '/less/**'
    ],
    dest: dest
  },
  markup: {
    src: src + "/www/**",
    dest: dest
  },
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/app/app.jsx',
      dest: dest,
      outputName: 'app.js'
    }]
  }
};
