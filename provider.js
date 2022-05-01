/**
 * Created by Cooper on 2022/05/01.
 */
const UnpkgService = require('./__gen_code/UnpkgService');
const ttypes = require('./__gen_code/unpkg_types');

const req = new ttypes.FindOneRequest();
req.name = 'koa-suit';
req.version = 12;

module.exports = {
  PROTOCOL: 'thrift',
  REQUEST: req,
  SERVICE: UnpkgService,
  METHOD: 'FindOne'
}

// console.log(Object.keys(module.exports).map(e=>e.toUpperCase()))
