const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = [
  {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, `./build`),
      filename: 'index.bundle.js'
    },
    resolve: {
      extensions: ['.js', '.scss'],
      modules: ['./src', 'node_modules']
    },
    resolveLoader: {
      moduleExtensions: ['-loader']
    },
    module: {
      rules: []
    }
  },
  {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, `./build`),
      filename: 'index.bundle.min.js'
    },
    resolve: {
      extensions: ['.js', '.scss'],
      modules: ['./src', 'node_modules']
    },
    resolveLoader: {
      moduleExtensions: ['-loader']
    },
    module: {
      rules: []
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new UglifyJsPlugin({
        parallel: true,
        uglifyOptions: {
            output: {
                quote_keys: true,
                ascii_only: true,
                keep_quoted_props: true
            }
        }
     })
   ]
  }
];
