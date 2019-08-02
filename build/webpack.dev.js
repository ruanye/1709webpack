// dev.js 开发环境
const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    port: '3005',
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    progress: true,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: 'style-loader',
      },
      {
        test: /\.css$/,
        use: 'css-loader',
      },
    ],
  },
  devtool: 'eval-source-map',
};
