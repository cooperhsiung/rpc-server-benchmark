# rpc-server-benchmark

Contestants list:

- http(koa)
- http(express)
- http(koa-suit)
- http(go-echo)
- thrift(native)
- thrift(koa-suit)
- thrift(gulu)
- thrift(golang)

## Result Index

- [Round1](#Round1-result)
- [Round2](#Round2-result)

## Development

install [autocannon](https://www.npmjs.com/package/@cooperhsiung/autocannon) suitable for thrift at first :warning:

```
npm i @cooperhsiung/autocannon -g --force
```

build source file

```
npm run build
```

start servers

> all Node.js servers run in single-thread.

```
node dist/http-koa.js
node dist/http-express.js
node dist/http-koa-suit.js

node dist/thrift-server.js
node dist/thrift-koa-suit.js
node src/my-gulu-app/output/bootstrap.js

cd src/thrift-go && go run main.go
cd src/http-go && go run main.go
```

## round1

```sh
autocannon http://127.0.0.1:3001/test  # koa
autocannon http://127.0.0.1:3002/test  # express
autocannon http://127.0.0.1:3003/test  # koa-suit
autocannon http://127.0.0.1:3004/test  # golang-echo

PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon 127.0.0.1:4001
PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon 127.0.0.1:4002
PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon 127.0.0.1:4003
PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon 127.0.0.1:4004
```

- http(koa)

```
Cooper@CooperdeMBP rpc-server-benchmark % autocannon http://127.0.0.1:3001/test
Running 10s test @ http://127.0.0.1:3001/test
10 connections


┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬───────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max   │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼───────┤
│ Latency │ 0 ms │ 0 ms │ 0 ms  │ 1 ms │ 0.02 ms │ 0.15 ms │ 12 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴───────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬──────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Req/Sec   │ 16319   │ 16319   │ 24895   │ 25023   │ 24050.55 │ 2454.98 │ 16312   │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Bytes/Sec │ 6.97 MB │ 6.97 MB │ 10.6 MB │ 10.7 MB │ 10.3 MB  │ 1.05 MB │ 6.97 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴──────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 11

265k requests in 11.01s, 113 MB read
```

- http(express)

```
Cooper@CooperdeMBP rpc-server-benchmark % autocannon http://127.0.0.1:3002/test
Running 10s test @ http://127.0.0.1:3002/test
10 connections


┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬───────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max   │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼───────┤
│ Latency │ 0 ms │ 0 ms │ 2 ms  │ 2 ms │ 0.32 ms │ 0.58 ms │ 16 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴───────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Req/Sec   │ 5379    │ 5379    │ 9903    │ 9991    │ 9396.55 │ 1303.9 │ 5378    │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Bytes/Sec │ 2.65 MB │ 2.65 MB │ 4.88 MB │ 4.93 MB │ 4.63 MB │ 643 kB │ 2.65 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 11

103k requests in 11.01s, 51 MB read
```

- http(koa-suit)

```
Cooper@CooperdeMBP rpc-server-benchmark % autocannon http://127.0.0.1:3003/test
Running 10s test @ http://127.0.0.1:3003/test
10 connections


┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬───────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max   │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼───────┤
│ Latency │ 0 ms │ 0 ms │ 0 ms  │ 1 ms │ 0.02 ms │ 0.17 ms │ 12 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴───────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 15287   │ 15287   │ 24111   │ 24559   │ 23207.6 │ 2662.03 │ 15281   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 6.53 MB │ 6.53 MB │ 10.3 MB │ 10.5 MB │ 9.91 MB │ 1.14 MB │ 6.52 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

232k requests in 10.01s, 99.1 MB read
```

- http(go-echo)

```
Cooper@CooperdeMBP rpc-server-benchmark % autocannon http://127.0.0.1:3004/test
Running 10s test @ http://127.0.0.1:3004/test
10 connections


┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬──────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max  │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼──────┤
│ Latency │ 0 ms │ 0 ms │ 0 ms  │ 0 ms │ 0.01 ms │ 0.06 ms │ 8 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴──────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬──────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Req/Sec   │ 43359   │ 43359   │ 51071   │ 51231   │ 50183.28 │ 2202.29 │ 43341   │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Bytes/Sec │ 16.5 MB │ 16.5 MB │ 19.4 MB │ 19.5 MB │ 19.1 MB  │ 839 kB  │ 16.5 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴──────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 11

552k requests in 11.01s, 210 MB read
```

- thrift(native)

```
Cooper@CooperdeMBP rpc-server-benchmark % PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon 127.0.0.1:4001

Running 10s test @ http://127.0.0.1:4001
10 connections


┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬───────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max   │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼───────┤
│ Latency │ 0 ms │ 0 ms │ 1 ms  │ 1 ms │ 0.12 ms │ 0.56 ms │ 22 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴───────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 7879    │ 7879    │ 15303   │ 15431   │ 14554.6 │ 2229.09 │ 7879    │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 2.02 MB │ 2.02 MB │ 3.92 MB │ 3.95 MB │ 3.73 MB │ 571 kB  │ 2.02 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

146k requests in 10.02s, 37.3 MB read
```

- thrift(koa-suit)

```
Cooper@CooperdeMBP rpc-server-benchmark % PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon 127.0.0.1:4002

Running 10s test @ http://127.0.0.1:4002
10 connections


┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬───────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max   │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼───────┤
│ Latency │ 0 ms │ 0 ms │ 1 ms  │ 2 ms │ 0.22 ms │ 0.59 ms │ 18 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴───────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬──────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Req/Sec   │ 6983    │ 6983    │ 13719   │ 13871   │ 12989.64 │ 1940.67 │ 6980    │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Bytes/Sec │ 1.79 MB │ 1.79 MB │ 3.51 MB │ 3.55 MB │ 3.33 MB  │ 497 kB  │ 1.79 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴──────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 11

143k requests in 11.02s, 36.6 MB read
```

- thrift(gulu)

```
Cooper@CooperdeMBP rpc-server-benchmark % PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon 127.0.0.1:4003
Running 10s test @ http://127.0.0.1:4003
10 connections


┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max    │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼────────┤
│ Latency │ 1 ms │ 2 ms │ 7 ms  │ 8 ms │ 2.22 ms │ 2.28 ms │ 101 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴────────┘
┌───────────┬────────┬────────┬────────┬─────────┬────────┬────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%   │ Avg    │ Stdev  │ Min    │
├───────────┼────────┼────────┼────────┼─────────┼────────┼────────┼────────┤
│ Req/Sec   │ 1740   │ 1740   │ 3831   │ 4391    │ 3602.2 │ 810.33 │ 1740   │
├───────────┼────────┼────────┼────────┼─────────┼────────┼────────┼────────┤
│ Bytes/Sec │ 446 kB │ 446 kB │ 981 kB │ 1.12 MB │ 922 kB │ 207 kB │ 445 kB │
└───────────┴────────┴────────┴────────┴─────────┴────────┴────────┴────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

36k requests in 10.02s, 9.22 MB read
```

- thrift(golang)

```
Cooper@CooperdeMBP rpc-server-benchmark % PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon 127.0.0.1:4004
Running 10s test @ http://127.0.0.1:4004
10 connections


┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬───────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max   │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼───────┤
│ Latency │ 0 ms │ 1 ms │ 1 ms  │ 2 ms │ 0.91 ms │ 0.46 ms │ 15 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴───────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Req/Sec   │ 6863    │ 6863    │ 9023    │ 9103    │ 8834.73 │ 625.04 │ 6861    │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Bytes/Sec │ 1.76 MB │ 1.76 MB │ 2.31 MB │ 2.33 MB │ 2.26 MB │ 160 kB │ 1.76 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 11

97k requests in 11.02s, 24.9 MB read
```

## Round1 result

result: 1 connection 10 pipelines

| framework        | qps(avg) |
| ---------------- | -------: |
| http(koa)        |    24050 |
| http(express)    |     9396 |
| http(koa-suit)   |    23207 |
| http(go-echo)    |    50183 |
| thrift(native)   |    14554 |
| thrift(koa-suit) |    12989 |
| thrift(gulu)     |     3602 |
| thrift(golang)   |     8834 |

## round2

```sh
autocannon -c 20 -p 50 http://127.0.0.1:3001/test
autocannon -c 20 -p 50 http://127.0.0.1:3002/test
autocannon -c 20 -p 50 http://127.0.0.1:3003/test
autocannon -c 20 -p 50 http://127.0.0.1:3004/test

PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon -c 20 -p 50 127.0.0.1:4001
PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon -c 20 -p 50 127.0.0.1:4002
PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon -c 20 -p 50 127.0.0.1:4003
PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon -c 20 -p 50 127.0.0.1:4004
```

- http(koa)

```
Cooper@CooperdeMBP rpc-server-benchmark % autocannon -c 20 -p 50 http://127.0.0.1:3001/test

Running 10s test @ http://127.0.0.1:3001/test
20 connections with 50 pipelining factor


┌─────────┬───────┬───────┬───────┬───────┬──────────┬─────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg      │ Stdev   │ Max    │
├─────────┼───────┼───────┼───────┼───────┼──────────┼─────────┼────────┤
│ Latency │ 20 ms │ 20 ms │ 27 ms │ 34 ms │ 20.97 ms │ 3.26 ms │ 122 ms │
└─────────┴───────┴───────┴───────┴───────┴──────────┴─────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬──────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Req/Sec   │ 38975   │ 38975   │ 47295   │ 48351   │ 46471.28 │ 2624.43 │ 38969   │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Bytes/Sec │ 16.6 MB │ 16.6 MB │ 20.2 MB │ 20.6 MB │ 19.8 MB  │ 1.12 MB │ 16.6 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴──────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 11

512k requests in 11.02s, 218 MB read
```

- http(express)

```
Cooper@CooperdeMBP rpc-server-benchmark % autocannon -c 20 -p 50 http://127.0.0.1:3002/test

Running 10s test @ http://127.0.0.1:3002/test
20 connections with 50 pipelining factor


┌─────────┬───────┬───────┬────────┬────────┬─────────┬─────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5%  │ 99%    │ Avg     │ Stdev   │ Max    │
├─────────┼───────┼───────┼────────┼────────┼─────────┼─────────┼────────┤
│ Latency │ 76 ms │ 81 ms │ 109 ms │ 124 ms │ 82.9 ms │ 9.38 ms │ 157 ms │
└─────────┴───────┴───────┴────────┴────────┴─────────┴─────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Req/Sec   │ 10255   │ 10255   │ 12103   │ 12607   │ 11946.4 │ 654.23 │ 10252   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Bytes/Sec │ 5.05 MB │ 5.05 MB │ 5.97 MB │ 6.21 MB │ 5.89 MB │ 323 kB │ 5.05 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

120k requests in 10.02s, 58.9 MB read
```

- http(koa-suit)

```
Cooper@CooperdeMBP rpc-server-benchmark % autocannon -c 20 -p 50 http://127.0.0.1:3003/test

Running 10s test @ http://127.0.0.1:3003/test
20 connections with 50 pipelining factor


┌─────────┬───────┬───────┬───────┬───────┬──────────┬─────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg      │ Stdev   │ Max    │
├─────────┼───────┼───────┼───────┼───────┼──────────┼─────────┼────────┤
│ Latency │ 20 ms │ 21 ms │ 27 ms │ 37 ms │ 21.34 ms │ 3.42 ms │ 122 ms │
└─────────┴───────┴───────┴───────┴───────┴──────────┴─────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬──────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Req/Sec   │ 38719   │ 38719   │ 47167   │ 47839   │ 45714.91 │ 2599.57 │ 38708   │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Bytes/Sec │ 16.5 MB │ 16.5 MB │ 20.2 MB │ 20.4 MB │ 19.5 MB  │ 1.11 MB │ 16.5 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴──────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 11

504k requests in 11.02s, 215 MB read
```

- http(go-echo)

```
Cooper@CooperdeMBP rpc-server-benchmark % autocannon -c 20 -p 50 http://127.0.0.1:3004/test

Running 10s test @ http://127.0.0.1:3004/test
20 connections with 50 pipelining factor


┌─────────┬──────┬───────┬───────┬───────┬─────────┬─────────┬───────┐
│ Stat    │ 2.5% │ 50%   │ 97.5% │ 99%   │ Avg     │ Stdev   │ Max   │
├─────────┼──────┼───────┼───────┼───────┼─────────┼─────────┼───────┤
│ Latency │ 9 ms │ 10 ms │ 11 ms │ 14 ms │ 9.69 ms │ 1.64 ms │ 55 ms │
└─────────┴──────┴───────┴───────┴───────┴─────────┴─────────┴───────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 86015   │ 86015   │ 100031  │ 102015  │ 98393.6 │ 4297.4  │ 86000   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 32.8 MB │ 32.8 MB │ 38.1 MB │ 38.9 MB │ 37.5 MB │ 1.64 MB │ 32.8 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

985k requests in 10.07s, 375 MB read
```

- thrift(native)

```
Cooper@CooperdeMBP rpc-server-benchmark % PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon -c 20 -p 50 127.0.0.1:4001

Running 10s test @ http://127.0.0.1:4001
20 connections with 50 pipelining factor


┌─────────┬───────┬───────┬───────┬───────┬──────────┬─────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg      │ Stdev   │ Max    │
├─────────┼───────┼───────┼───────┼───────┼──────────┼─────────┼────────┤
│ Latency │ 22 ms │ 24 ms │ 31 ms │ 37 ms │ 24.64 ms │ 7.98 ms │ 283 ms │
└─────────┴───────┴───────┴───────┴───────┴──────────┴─────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 33951   │ 33951   │ 41023   │ 42015   │ 40681.6 │ 2342.34 │ 33950   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 8.69 MB │ 8.69 MB │ 10.5 MB │ 10.8 MB │ 10.4 MB │ 600 kB  │ 8.69 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

408k requests in 10.42s, 104 MB read
```

- thrift(koa-suit)

```
Cooper@CooperdeMBP rpc-server-benchmark % PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon -c 20 -p 50 127.0.0.1:4002
Running 10s test @ http://127.0.0.1:4002
20 connections with 50 pipelining factor


┌─────────┬───────┬───────┬───────┬───────┬──────────┬──────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg      │ Stdev    │ Max    │
├─────────┼───────┼───────┼───────┼───────┼──────────┼──────────┼────────┤
│ Latency │ 16 ms │ 28 ms │ 53 ms │ 63 ms │ 29.57 ms │ 13.04 ms │ 304 ms │
└─────────┴───────┴───────┴───────┴───────┴──────────┴──────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬──────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Req/Sec   │ 25455   │ 25455   │ 31663   │ 39679   │ 33668.81 │ 4973.24 │ 25447   │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Bytes/Sec │ 6.52 MB │ 6.52 MB │ 8.11 MB │ 10.2 MB │ 8.62 MB  │ 1.27 MB │ 6.51 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴──────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

338k requests in 10.32s, 86.2 MB read
```

- thrift(gulu)

```
Cooper@CooperdeMBP rpc-server-benchmark % PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon -c 20 -p 50 127.0.0.1:4003
Running 10s test @ http://127.0.0.1:4003
20 connections with 50 pipelining factor


┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
│ Latency │ 192 ms │ 205 ms │ 367 ms │ 379 ms │ 217.78 ms │ 41.12 ms │ 435 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬────────┬────────┬─────────┬─────────┬─────────┬────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min    │
├───────────┼────────┼────────┼─────────┼─────────┼─────────┼────────┼────────┤
│ Req/Sec   │ 2939   │ 2939   │ 4871    │ 4959    │ 4585.4  │ 624.25 │ 2939   │
├───────────┼────────┼────────┼─────────┼─────────┼─────────┼────────┼────────┤
│ Bytes/Sec │ 753 kB │ 753 kB │ 1.25 MB │ 1.27 MB │ 1.17 MB │ 160 kB │ 752 kB │
└───────────┴────────┴────────┴─────────┴─────────┴─────────┴────────┴────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

47k requests in 10.28s, 11.7 MB read
```

- thrift(golang)

```
Cooper@CooperdeMBP rpc-server-benchmark % PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon -c 20 -p 50 127.0.0.1:4004
Running 10s test @ http://127.0.0.1:4004
20 connections with 50 pipelining factor


┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
│ Latency │ 124 ms │ 127 ms │ 134 ms │ 135 ms │ 128.15 ms │ 11.86 ms │ 342 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬────────┬────────┬─────────┬─────────┬────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%     │ 97.5%   │ Avg    │ Stdev   │ Min    │
├───────────┼────────┼────────┼─────────┼─────────┼────────┼─────────┼────────┤
│ Req/Sec   │ 7411   │ 7411   │ 7843    │ 7991    │ 7814.8 │ 167.04  │ 7408   │
├───────────┼────────┼────────┼─────────┼─────────┼────────┼─────────┼────────┤
│ Bytes/Sec │ 1.9 MB │ 1.9 MB │ 2.01 MB │ 2.05 MB │ 2 MB   │ 42.8 kB │ 1.9 MB │
└───────────┴────────┴────────┴─────────┴─────────┴────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

79k requests in 10.28s, 20 MB read
```

## Round2 result

result: 20 connection 50 pipelines

| framework        | qps(avg) |
| ---------------- | -------: |
| http(koa)        |    46471 |
| http(express)    |    11946 |
| http(koa-suit)   |    45714 |
| http(go-echo)    |    98393 |
| thrift(native)   |    40681 |
| thrift(koa-suit) |    33668 |
| thrift(gulu)     |     4585 |
| thrift(golang)   |     7814 |

<br/>

All tests run on my MacBook Pro

```
MacBook Pro (16-inch, 2019)
2.6 GHz 六核Intel Core i7
16 GB 2667 MHz DDR4
AMD Radeon Pro 5300M 4 GB
Intel UHD Graphics 630 1536 MB
```
