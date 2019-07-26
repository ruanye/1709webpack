//webpack 基于node的 自带了express
let path = require("path"); //node的路径模块
//引入html插件html的webpack插件
let HtmlWebpackPlugin = require("html-webpack-plugin");
// module.exports -> node的模块导出
module.exports = {
  mode: "production", //开发环境 development    生产环境 production
  devServer: {
    port: "3001", //port 服务的端口号 0 -65500
    contentBase: "./dist",
    open: true, // 是否自动打开浏览器
    progress: true, //显示进度条
    compress: true //是否开启gzip压缩
  },
  entry: "./src/index.js", //入口，可以是相对路径  vue 配置 src/main.js  入口不配置默认找src/index.js
  output: {
    //出口 打包之后的文件放在哪
    path: path.join(__dirname, "dist"), //打包之后的路径，必须是绝对路径 默认打包dist
    filename: "bundle[hash:4].js" //打包出来的js的文件名 默认叫做main.js
  },
  //插件的集合
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", //以谁为模板
      filename: "index.html", //打包后的文件名
      minify: {
        //迷你 压缩配置
        collapseWhitespace: true, //折叠去除空格
        removeAttributeQuotes: true //去除引号
      }
    })
  ],
  module: {
    //模块处理
    rules: [
      //rule规则 一堆规则 每一条规则是一个对象
      {
        test: /\.css$/,
        use: {
          //写成对对象的时候可以加一些自定义的配置
          loader: "style-loader",
          options: {
            //写一些自定义配置
            insertAt: "bottom" //把样式添加到顶部或者底部
          }
        }
      },
      {
        test: /\.css$/, //正则匹配文件类型
        use: "css-loader" //use 使用  使用什么样loadder
      }
    ]
  }
};
