/**
 * Created by Cooper on 2022/05/01.
 */
const path = require('path');
var thrift = require('thrift');
var UnpkgService = require('../__gen_code/UnpkgService');
var ttypes = require('../__gen_code/unpkg_types');

var server = thrift.createServer(UnpkgService, {
  Publish: function (req: any, result: any) {
    var res = new ttypes.PublishResponse();
    res.code = 123;
    res.message = 'test11';
    result(null, {
      code: 2,
      message: 'from official server1',
      data: {
        logId: 'qweqwe',
      },
    });
  },
  FindOne: function (req: any, result: any) {
    result(null, {
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
    });
  },
});

server.on('close', (s: any) => {
  console.log('close', s);
});

server.on('error', (e: any) => {
  console.log('error', e);
  // 如果 ECONNRESET，不管
});

server.listen(4001);
console.log(path.basename(__filename), 'listening on 4001...');
