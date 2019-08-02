// webpack.config.js 放公用的webpack配置
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = pathname => path.resolve(__dirname, pathname);
module.exports = {
  entry: resolve('../src/index.js'),
  output: {
    path: resolve('../dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('../public/index.html'),
      filename: 'index.html',
    }),
  ],
};
