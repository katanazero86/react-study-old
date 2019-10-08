const koa = require('koa');
const koaStatic = require('koa-static');
const koaRouter = require('koa-router');
const koaLogger = require('koa-logger');
const path = require('path');
const fs = require('fs');

const koaApp = new koa();
const router = new koaRouter();

koaApp.use(koaLogger());
koaApp.use(koaStatic(path.resolve(__dirname, './build/')));
koaApp.use(router.routes());
koaApp.use(router.allowedMethods());

const indexFile = fs.readFileSync(path.resolve(__dirname, './build/index.html'), {encoding : 'utf8'});

koaApp.use(async (ctx) => {
   ctx.body = indexFile;
});

koaApp.listen(80, () => {
   console.log('react server starting..');
});
