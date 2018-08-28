const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
  {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, `./lib`),
      filename: 'my-module.js'
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
            presets: ["env", "react"],
            plugins: [
              "transform-class-properties",
              ["transform-es2015-modules-commonjs", {
                "allowTopLevelThis": true
              }]
            ]
          }
        },
        {
          test: /\.(css|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css', 'sass'
          ]
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
      new MiniCssExtractPlugin({
        filename: 'style.css'
      })
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
      path: path.join(__dirname, `./lib`),
      filename: 'my-module.min.js',
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
            compact: true,
            presets: ["env", "react"],
            plugins: [
              "transform-class-properties"
            ]
          }
        },
        {
          test: /\.(css|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css', 'sass'
          ]
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: {
            loader: 'url',
            options: {
              name: '[name].[ext]?[hash]',
              publicPath: './lib/',
              limit: 100000 // 100kb
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
      new MiniCssExtractPlugin({
        filename: 'style.css'
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      })
    ]
  }
];
