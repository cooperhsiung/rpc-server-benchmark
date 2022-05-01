import { ThriftContext, Controller } from '@gulu/application-thrift';

export default class UnpkgController extends Controller {
  public async Publish(ctx: ThriftContext) {
    ctx.body = { code: 0, message: 'publish success' };
  }

  public async FindOne(ctx: ThriftContext) {
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
  }
}
