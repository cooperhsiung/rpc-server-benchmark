import { app } from '@gulu/mocker';
import { ThriftApplication } from '@gulu/application-thrift';
import path from 'path';

describe('user service', () => {
  let application: ThriftApplication;
  beforeAll(async () => {
    application = app({ appType: 'thrift', idl: path.resolve(__dirname, '../idl/user.thrift') });
    await application.ready();
  });
  it('should call rpc OK', async () => {
    const resp = await application.rpcRequest().UserService.GetUserBaseInfo({ username: 'gulu' });
    expect(resp).toEqual({
      info: {
        username: 'gulu',
        email: 'gulu@bytedance.com',
      },
      BaseResp: {
        StatusMessage: 'OK',
        StatusCode: 0,
      },
    });
  });

  it('should mock service', async () => {
    const fn = jest.fn(() => 'hello world');
    const ctx = application.mockContext();
    application.mockService('user', 'getBaseInfo', fn);
    const ret = await ctx.service.user.getBaseInfo('ssk');
    expect(ret).toBe('hello world');
    expect(fn).toBeCalled();
  });
});
