/**
 * Created by Cooper on 2022/05/01.
 */
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('@koa/router');
const path = require('path');

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router.get('/test', async (ctx: any, next: any) => {
  ctx.body = {
    name: 'rpc-server-benchmark',
    version: '1.0.0',
    description: 'Performance testing of rpc servers.',
    main: 'index.js',
    repository: {
      type: 'git',
      url: 'git+https://github.com/cooperhsiung/rpc-server-benchmark.git',
    },
    author: 'CooperHsiung',
    license: 'MIT',
  };
});

app.listen(3001);

app.use(router.routes());
console.log(path.basename(__filename), 'listening on 3001...');
