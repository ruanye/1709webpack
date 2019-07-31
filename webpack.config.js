// webpack 基于node的 自带了express
const path = require('path'); // node的路径模块
const webpack = require('webpack');
// 引入html插件html的webpack插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// module.exports -> node的模块导出
module.exports = {
  mode: 'production', // 开发环境 development    生产环境 production
  devServer: {
    port: '3005', // port 服务的端口号 0 -65500
    contentBase: './dist', // 项目运行目录
    open: true, // 是否自动打开浏览器
    progress: true, // 显示进度条
    compress: true, // 是否开启gzip压缩
    // overlay: true, // 有eslint报错显示遮罩层
    before(app) {
      // http://localhost:3005/user
      // app就是express提供的
      app.get('/user', (req, res) => {
        res.json('1234');
      });
    },
  },
  entry: './src/index.js', // 入口，可以是相对路径  vue 配置 src/main.js  入口不配置默认找src/index.js
  output: {
    // 出口 打包之后的文件放在哪
    path: path.join(__dirname, 'dist'), // 打包之后的路径，必须是绝对路径 默认打包dist
    filename: 'js/bundle[hash:4].js', // 打包出来的js的文件名 默认叫做main.js,
    // publicPath: 'www.baidu.com',
  },
  // 插件的集合
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 以谁为模板
      filename: 'index.html', // 打包后的文件名
      minify: {
        // 迷你 压缩配置
        collapseWhitespace: true, // 折叠去除空格
        removeAttributeQuotes: true, // 去除引号
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/index.css', // 抽离出来的css的文件名称 默认是main.css
    }),
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    // }),
    new CleanWebpackPlugin({}),
    new webpack.BannerPlugin('版权所有人张思博,盗版必究'),
    // new CopyWebpackPlugin([{
    //   from:'images',
    //   to:'./images'
    // }])
  ],
  module: {
    // 模块处理 loader 模块解析器
    rules: [
      // rule规则 一堆规则 每一条规则是一个对象
      {
        test: /\.(css|less)$/,
        use: {
          // 写成对对象的时候可以加一些自定义的配置
          loader: MiniCssExtractPlugin.loader, // 负责抽离css
          // loader: "style-loader" //插入到style
        },
      },
      {
        test: /\.(css|less)$/, // 正则匹配文件类型
        use: ['css-loader', 'postcss-loader'], // use 使用  使用什么样loadder
      },
      {
        test: /\.less$/,
        use: ['less-loader', 'postcss-loader'],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.resolve(__dirname, 'src'), // 表示包含什么 src下面的文件需要使用babel-loader
        exclude: /node_modules/, // 不包含什么
      },
      {
        test: /\.(jpg|png|gif|jpeg)/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 0 * 1024,
            outputPath: '/img/',
          },
        },
      },
      {
        test: /\.html$/,
        use: 'html-withimg-loader',
      },
    ],
  },
  // 配置优化项
  optimization: {
    minimizer: [new TerserWebpackPlugin(), new OptimizeCssAssetsWebpackPlugin()],
  },
  externals: {
    // 配置忽略打包项
    // jquery: 'jQuery',
  },
};
