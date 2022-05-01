/**
 * Created by Cooper on 2022/05/01.
 */
import 'reflect-metadata';
import { Controller, Get, HttpFactory, Module } from 'koa-suit';
const path = require('path');

const bodyParser = require('koa-bodyparser');

@Controller()
export class UserController {
  @Get('/test')
  getTest() {
    return {
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
  }
}

@Module({
  controllers: [UserController],
  midddlewares: [],
})
class AppModule {}

async function bootstrap() {
  const app = await HttpFactory.create(AppModule, { middlewares: [bodyParser()] });
  await app.listen(3003);
  console.log(path.basename(__filename), 'listening on 3003...');
}

bootstrap();
