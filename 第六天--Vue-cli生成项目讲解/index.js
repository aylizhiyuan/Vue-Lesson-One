const koa = require('koa')
const Router = require('koa-router')

const app = new koa()
const router = new Router()

//挂载一些路由的规则，当请求过来的时候，返回给用户不同的数据
router.get('/',async ctx=>{
    ctx.body = '欢迎您访问首页'
}).get('/foo',async ctx=>{
    ctx.body = '您访问的是foo页面'
}).get('/bar',async ctx=>{
    ctx.body = '您访问的是bar页面'
})

app.use(router.routes()) //路由生效,加到服务器的请求处理过程中
app.listen(3000,function(){
    console.log('node is OK');
})