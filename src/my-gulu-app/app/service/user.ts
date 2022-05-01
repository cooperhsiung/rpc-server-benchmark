import { Service } from '@gulu/application-thrift';

export default class UserService extends Service {
  public async getBaseInfo(username: string) {
    return {
      username,
      email: 'gulu@bytedance.com',
    };
  }

  public async getProjects(uid: number) {
    return [
      {
        uid,
        name: 'gulu',
        repo: 'https://code.byted.org/nodejs/gulu',
        maintainers: ['yeyuanfeng', 'qizihan'],
      },
      {
        uid,
        name: 'byted-service',
        repo: 'https://code.byted.org/nodejs/byted-service',
        maintainers: ['yeyuanfeng', 'liyubei', 'ouyangyadong'],
      },
    ];
  }
}
