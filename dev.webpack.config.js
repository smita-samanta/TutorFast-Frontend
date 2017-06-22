const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'static'),
    port: 9000,
    hot: true,
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  resolve: {
    alias: {
      '~': path.resolve('./src'),
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      // },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'stage-0', 'react'],
          plugins: [
            'transform-runtime',
            'add-module-exports',
          ],
        },
      },
    ],
  },
};
