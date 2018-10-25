const path = require('path');
const webpack = require('webpack');

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
      rules: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: [path.join(__dirname, 'node_modules')],
          options: {
            compact: true,
            presets: [
                ["env", {
                targets: {
                  uglify: true,
                },
                modules: false,
                debug: false
              }]
            ],
            plugins: [
              ["transform-runtime", {
                "helpers": false,
                "polyfill": false,
                "regenerator": true
              }],
              "dynamic-import-node"
            ]
          }
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
