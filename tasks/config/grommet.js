/**
 * Copies images to .tmp/images after compressing them.
 *
 * ---------------------------------------------------------------
 *
 *
 */

var path = require('path');
var devGulpTasks = require('grommet/utils/gulp/gulp-tasks');

module.exports = function(gulp, plugins, growl) {
  gulp.task('grommet:dist', function() {
    var opts = {

     base: '.',
     dist: path.resolve(__dirname, '../../.tmp/public/'),
     copyAssets: [
       'client/index.html',
       {
         asset: 'client/img/**',
         dist: 'dist/img/'
       }
     ],
     scssAssets: ['client/scss/**/*.scss'],
     jsAssets: ['client/js/**/*.js'],
     mainJs: 'client/js/index.js',
     mainScss: 'client/scss/index.scss',
     webpack: {
       resolve: {
         root: [
           path.resolve(__dirname, 'client/js'),
           path.resolve(__dirname, 'client/scss'),
           path.resolve(__dirname, 'node_modules')
         ]
       }
     }
    };
    devGulpTasks(gulp, opts);
    return gulp.start('dist');
	});

  gulp.task('grommet:dev', function() {
    var opts = {

     base: '.',
     dist: path.resolve(__dirname, '../../.tmp/public/'),
     copyAssets: [
       'client/index.html',
       {
         asset: 'client/img/**',
         dist: 'dist/img/'
       }
     ],
     scssAssets: ['client/scss/**/*.scss'],
     jsAssets: ['client/js/**/*.js'],
     mainJs: 'client/js/index.js',
     mainScss: 'client/scss/index.scss',
     webpack: {
       resolve: {
         root: [
           path.resolve(__dirname, 'client/js'),
           path.resolve(__dirname, 'client/scss'),
           path.resolve(__dirname, 'node_modules')
         ]
       }
     },
     devServerPort: 9000,
     devServerProxy: {
        "/api/*": 'http://localhost:1337'
     },
    };
    devGulpTasks(gulp, opts);
    return gulp.start('dev');
	});
};
