// prod.js 生产环境配置
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [new TerserWebpackPlugin(), new OptimizeCssAssetsWebpackPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new CleanWebpackPlugin({}),
  ],
  module: {
    rules: [
      {
        test: /\.css/,
        use: MiniCssExtractPlugin.loader,
      },
      {
        test: /\.css$/,
        use: 'css-loader',
      },
    ],
  },
};
