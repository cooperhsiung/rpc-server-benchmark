import { ThriftContext, Controller } from '@gulu/application-thrift';

export default class UserInfoController extends Controller {
  public async getBaseInfo(ctx: ThriftContext) {
    const baseInfo = await ctx.service.user.getBaseInfo(ctx.args.req.username);
    ctx.body = {
      info: baseInfo,
      BaseResp: {
        StatusMessage: 'OK',
        StatusCode: 0,
      },
    };
  }

  public async getProjects(ctx: ThriftContext) {
    const projects = await ctx.service.user.getProjects(ctx.args.req.uid);
    ctx.body = {
      projects,
      BaseResp: {
        StatusMessage: 'OK',
        StatusCode: 0,
      },
    };
  }
}
