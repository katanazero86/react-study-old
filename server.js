const koa = require('koa');
const koaStatic = require('koa-static');
const path = require('path');
const fs = require('fs');

const koaApp = new koa();

const indexFile = fs.readFileSync(path.resolve(__dirname, './build/index.html'), {encoding : 'utf8'});

koaApp.use(koaStatic(path.resolve(__dirname, './build/')));
koaApp.use(async (ctx) => {
   ctx.body = indexFile;
});

koaApp.listen(80, () => {
   console.log('react server starting..');
});
