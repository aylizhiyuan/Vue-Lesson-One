//测试环境下的webpack配置文件
const webpack = require('webpack')
const path = require('path')

module.exports = {
    //指定入口文件
    entry:'../src/main',
    //指定输出
    output: {
        path:path.join(__dirname,'../dist'),
        filename: "build.js",
        publicPath: "/dist/"
    },
    mode:"development",
    module:{
        rules:[
            //编译CSS文件
            {
                test:/\.css$/,
                use:['vue-style-loader','css-loader']
            },
            //编译scss文件
            {
                test:/\.scss$/,
                use:['vue-style-loader','css-loader','sass-loader']
            },
            //编译sass文件
            {
                test:/\.sass$/,
                use:['vue-style-loader','css-loader','sass-loader?indentedSyntax']
            },
            //解析vue文件
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                    loaders:{
                        'scss':[
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass':[
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                }
            },
            //解析ES6语法规则
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{
                    presets:[['env',{modules:false}],'stage-0']
                }
            },
            //解析图片
            {
                test:/\.(png|jpe?g|gif|svg)$/,
                loader:'url-loader',
                name:'[name].[ext]?[hash]'
            }
        ]
    },
    resolve:{
        //设置文件的别名
        alias:{
            vue$:'vue/dist/vue.esm.js',
            '@':path.join(__dirname,'../src')
        },
        //require的时候可以省略后缀名
        extensions: ['*','.js','.vue','.json']
    },
    //设置咱们的测试环境服务器的相关配置
    devServer: {
        historyApiFallback:true,
        noInfo:true,
        overlay:true
    },
    performance:{
        hints:false
    },
    devtool: "#eval-source-map"
}