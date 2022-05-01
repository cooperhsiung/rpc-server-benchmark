import { ThriftApplication } from '@gulu/application-thrift';

export default (app: ThriftApplication) => {
  const { router } = app;
  // router.method('GetUserBaseInfo', app.controller.user.getBaseInfo);
  // router.method('GetUserProjectList', app.controller.user.getProjects);
  router.method('Publish', app.controller.unpkg.Publish);
  router.method('FindOne', app.controller.unpkg.FindOne);
};
