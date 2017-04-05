/**
 * Created by Administrator on 2017/4/3.
 */

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var paths = require('../config/path');

const config = require('../config/webpack.config');
const port = 9444;

const compiler = webpack(config, (err, stats)  => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings)
  }

});

var devServer = new WebpackDevServer(compiler, {
  compress: true,
  clientLogLevel: 'none',
  contentBase: paths.resolveApp('public'),
  hot: true,
  publicPath: config.output.publicPath,
  quiet: true,
  watchOptions: {
    ignored: /node_modules/
  },
  host: 'localhost'
})

devServer.listen(port, (err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log('Starting the development server...');
  console.log();
});

