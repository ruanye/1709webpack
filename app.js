// 让webpack在服务端运行
const express = require('express');
const webpack = require('webpack');
const middle = require('webpack-dev-middleware');
// middle 是服务端运行webpack的插件
const config = require('./webpack.config.js');
// config webpack的配置
const compiler = webpack(config);
const app = express();
app.use(middle(compiler));

app.listen(8081);
app.get('/list', (req, res) => {
  res.json('hello world');
});
