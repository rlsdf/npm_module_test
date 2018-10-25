const path = require('path');
const webpack = require('webpack');

module.exports = [
  {
    entry: './index.lib.js',
    output: {
      path: path.join(__dirname, `../lib`),
      filename: 'index.lib.js',
      libraryTarget: 'commonjs2',
      library: 'MyModuleApp'
    },
    resolve: {
      extensions: ['.js', '.scss'],
      modules: ['./src', 'node_modules']
    },
    resolveLoader: {
      moduleExtensions: ['-loader']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: [path.join(__dirname, 'node_modules')]
        }
        // {
        //   test: /\.(css|scss)$/,
        //   use: [
        //     'css', 'sass'
        //   ]
        // }
      ]
    }
  },
  {
    entry: './index.lib.js',
    output: {
      path: path.join(__dirname, `../lib`),
      filename: 'index.lib.min.js',
      libraryTarget: 'var',
      library: 'MyModuleApp'
    },
    resolve: {
      extensions: ['.js', '.scss'],
      modules: ['./src', 'node_modules']
    },
    resolveLoader: {
      moduleExtensions: ['-loader']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: [path.join(__dirname, 'node_modules')]
        }
        // {
        //   test: /\.(css|scss)$/,
        //   use: [
        //     'css', 'sass'
        //   ]
        // }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      })
    //   new UglifyJSPlugin({
    //     parallel: true,
    //     uglifyOptions: {
    //         output: {
    //             quote_keys: true,
    //             ascii_only: true,
    //             keep_quoted_props: true
    //         }
    //     }
    //  })
   ]
  }
];
