const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static')

app.use(serve('./view/'));

app.listen(3000,()=>{console.log('服务启动在3000端口')});
