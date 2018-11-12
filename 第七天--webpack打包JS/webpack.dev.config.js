//webpack打包的配置文件
const webpack = require('webpack')
const path = require('path')
module.exports = {
    //指定一下webpack打包时候的环境
    mode:"development", //测试环境下的打包文件
    //1.指定webpack打包的入口文件位置
    entry:'./main.js',
    //2.指定wepback打包的出口信息
    output:{
        //打包成功后的文件路径
        path:path.resolve(__dirname,'./dist'),
        filename: "bundle.js"
    },
    //3.针对非JS的模块引入，我们需要不同的loader装载器来处理
    // css文件： css-loader
    // scss文件：sass-loader
    module:{
        rules:[
            //如果在模块引入的时候，发现有.css的模块，那么就交给style-loader和css-loader处理一下
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}
        ]
    },
    plugins: [
        //插件在使用的时候，通常都是用new关键字来进行实例化的.
        new webpack.BannerPlugin('这是打包的注释插件')
    ]
}