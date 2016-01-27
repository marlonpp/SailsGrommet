/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * Only applies to HTTP requests (not WebSockets)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.http.html
 */

module.exports.http = {
  /****************************************************************************
  *                                                                           *
  * Express middleware to use for every Sails request. To add custom          *
  * middleware to the mix, add a function to the middleware config object and *
  * add its key to the "order" array. The $custom key is reserved for         *
  * backwards-compatibility with Sails v0.9.x apps that use the               *
  * `customMiddleware` config option.                                         *
  *                                                                           *
  ****************************************************************************/

   //middleware: {

  /***************************************************************************
  *                                                                          *
  * The order in which middleware should be run for HTTP request. (the Sails *
  * router is invoked by the "router" middleware below.)                     *
  *                                                                          *
  ***************************************************************************/

    // order: [
    //   'startRequestTimer',
    //   'cookieParser',
    //   'session',
    //   'myRequestLogger',
    //   'bodyParser',
    //   'handleBodyParserError',
    //   'compress',
    //   'methodOverride',
    //   'poweredBy',
    //   '$custom',
    //   'router',
    //   'www',
    //   'favicon',
    //   '404',
    //   '500'
    // ],

  /****************************************************************************
  *                                                                           *
  * Example custom middleware; logs each request to the console.              *
  *                                                                           *
  ****************************************************************************/

    // myRequestLogger: function (req, res, next) {
    //     console.log("Requested :: ", req.method, req.url);
    //     return next();
    // }


  /***************************************************************************
  *                                                                          *
  * The body parser that will handle incoming multipart HTTP requests. By    *
  * default as of v0.10, Sails uses                                          *
  * [skipper](http://github.com/balderdashy/skipper). See                    *
  * http://www.senchalabs.org/connect/multipart.html for other options.      *
  *                                                                          *
  ***************************************************************************/

    // bodyParser: require('skipper')

  //},

  // customMiddleware: function(app){
  //   if(sails.config.environment === 'development'){
  //     var path = require('path');
  //     var webpack = require('webpack');
  //
  //     var options = {
  //       devtool: 'source-map',
  //       entry: {
  //         main: ['./src/js/index.js', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000']
  //       },
  //       output: {
  //         filename: 'index.js',
  //         path: path.join(__dirname, '../.tmp/public/portal'),
  //       },
  //       plugins: [
  //         new webpack.optimize.OccurenceOrderPlugin(),
  //         new webpack.HotModuleReplacementPlugin(),
  //         new webpack.NoErrorsPlugin()
  //         // new Clean([
  //         //   '../.tmp/public/**.hot-update.json',
  //         //   '../.tmp/public/**.hot-update.js.map',
  //         //   '../.tmp/public/**.hot-update.js'])
  //         // new WebpackCleanPlugin([
  //         //   '../.tmp/public/portal/**.hot-update.json',
  //         //   '../.tmp/public/portal/**.hot-update.js.map',
  //         //   '../.tmp/public/portal/**.hot-update.js'])
  //       ],
  //       module: {
  //         loaders: [
  //           {
  //             test: /\.jsx?$/,
  //             include: path.join(__dirname, '../src'),
  //             loader: 'react-hot!babel'
  //           },
  //           {
  //             test: /\.scss$/,
  //             include: path.join(__dirname, '../src'),
  //             loader: 'style!css!sass'
  //           }
  //         ]
  //       }
  //     }
  //
  //     var webpackConfig = options;
  //     var compiler = webpack(webpackConfig);
  //     app.use(require("webpack-dev-middleware")(compiler));
  //     app.use(require("webpack-hot-middleware")(compiler,{
  //       log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  //     }));
  //   }
  // }
  /***************************************************************************
  *                                                                          *
  * The number of seconds to cache flat files on disk being served by        *
  * Express static middleware (by default, these files are in `.tmp/public`) *
  *                                                                          *
  * The HTTP static cache is only active in a 'production' environment,      *
  * since that's the only time Express will cache flat-files.                *
  *                                                                          *
  ***************************************************************************/

  // cache: 31557600000
};
