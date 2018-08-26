const path = require('path');
const webpack = require('webpack');

module.exports = [
  {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: './lib/my-module.js',
      libraryTarget: 'umd',
      library: 'MyModule'
    },
    resolve: {
      extensions: ['.js'],
      modules: ['./src', 'node_modules']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel',
          include: [path.join(__dirname, 'src')],
          options: {
            presets: ["es2015", "react"]
          }
        }
      ]
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  },
  {
    mode: 'production',
    entry: './src/index.js',
    output: {
      filename: './lib/my-module.min.js',
      libraryTarget: 'umd',
      library: 'MyModule'
    },
    resolve: {
      extensions: ['.js'],
      modules: ['./src', 'node_modules']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel',
          include: [path.join(__dirname, 'src')],
          options: {
            presets: ["es2015", "react"]
          }
        }
      ]
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false
        },
        compress: {
          warnings: false
        }
      })
    ]
  }
];
