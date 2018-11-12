

### 初始化项目

初始化项目，用`vue-loader`来打包`.vue`文件，`html-webpack-plugin`插件来导出`html`文件。
第一步我们很简单，就利用`vue-loader` 和` babel-loader `是把`.vue`文件打包出来，总共才40多行代码，看`build/webpack.base.conf.js`文件注释就看的懂。`+++`表示有省略的代码

````javascript
module.exports = {
  +++
  // 模块，loader
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        include: resolve('src')
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: resolve('src')
      }
    ]
  }
  +++
}

````
