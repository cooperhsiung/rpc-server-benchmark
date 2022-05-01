/**
 * Created by Cooper on 2022/05/01.
 */
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { createServer } = require('http');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/test', (req: any, res: any, next: any) => {
  res.json({
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
});

const server = createServer(app);

server.listen(3002);
console.log(path.basename(__filename), 'listening on 3002...');
