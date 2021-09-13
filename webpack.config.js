const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
    publicPath: '/dist',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public/'),
    },
    port: 3000,
    compress: true,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
