const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
          include: [path.join(__dirname, 'src')],
          options: {
            presets: ["es2015", "react"]
          }
        },
        {
          test: /\.(css|scss)$/,
          include: [path.join(__dirname, 'src')],
          use: ExtractTextPlugin.extract({
            fallback: 'style',
            use: ['css', 'sass']
          })
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: {
            loader: 'url',
            options: {
              name: '[name].[ext]?[hash]',
              publicPath: './lib/',
              limit: 100000 // under 100kb
            }
          }
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('style.css')
    ],
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
          include: [path.join(__dirname, 'src')],
          options: {
            presets: ["es2015", "react"]
          }
        },
        {
          test: /\.(css|scss)$/,
          include: [path.join(__dirname, 'src')],
          use: ExtractTextPlugin.extract({
            fallback: 'style',
            use: ['css', 'sass']
          })
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: {
            loader: 'url',
            options: {
              name: '[name].[ext]?[hash]',
              publicPath: './lib/',
              limit: 10000 // 10kb
            }
          }
        }
      ]
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    },
    plugins: [
      new ExtractTextPlugin('style.css'),
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
