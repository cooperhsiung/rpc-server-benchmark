import path from 'path';
import { ThriftApplication } from '@gulu/application-thrift';

const ROOT = path.resolve(__dirname);
const IDL_PATH = path.resolve(__dirname, 'idl/unpkg.thrift');

const app = new ThriftApplication({
  name: 'demo',
  root: ROOT,
  idl: IDL_PATH,
  typeGenerator: {
    useNewGenTypeDir: true,
  },
  coreLogger: {
    dir: ROOT,
    enableFileLog: false,
    enableConsoleLog: false,
    enableMetrics: false,
    // 以上为默认配置，更多配置项详见 @byted-service/logger 文档
  },
  logger: {
    dir: ROOT,
    enableFileLog: false,
    enableMetrics: false,
    // 以上为默认配置，更多配置项详见 @byted-service/logger 文档
  },
});

app.load(ROOT).listen(process.env.PORT || 4003);
console.log(path.basename(__filename), 'listening on 4003...');
