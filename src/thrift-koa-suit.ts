/**
 * Created by Cooper on 2022/05/01.
 */
import 'reflect-metadata';
import { Controller, Method, Module, ThriftFactory } from 'koa-suit';

const path = require('path');

var UnpkgService = require('../__gen_code/UnpkgService');

@Controller()
export class UserController {
  @Method()
  Publish() {
    return { code: 0, message: 'publish success' };
  }

  @Method()
  FindOne() {
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
  const app = await ThriftFactory.create(AppModule, { service: UnpkgService });
  await app.listen(3005);
  console.log(path.basename(__filename), 'listening on 3005...');
}

bootstrap();
