const merge = require('webpack-merge');
// merge 合并webpack 配置用的
const config = require('./webpack.config');
const prod = require('./webpack.prod');
const dev = require('./webpack.dev');

module.exports = (env, url) => {
  console.log(env); // { production: true } {development:true}
  if (env.production) {
    return merge(config, prod);
  }
  return merge(config, dev);
};
