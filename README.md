# rpc-server-benchmark

contestant list

- http(koa)
- http(express)
- http(koa-suit)
- thrift(native)
- thrift(koa-suit)
- thrift(gulu)

## Development

install autocannon suitable for thrift

```
npm i @cooperhsiung/autocannon -g --force
```

build source file

```
npm run build
```

start servers

```
node dist/http-koa.js
node dist/http-express.js
node dist/http-koa-suit.js
node dist/thrift-server.js
node dist/thrift-koa-suit.js
node src/my-gulu-app/output/bootstrap.js
```

## result round1

```sh
autocannon http://127.0.0.1:3001
autocannon http://127.0.0.1:3002
autocannon http://127.0.0.1:3003

PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon 127.0.0.1:3004
PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon 127.0.0.1:3005
PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon 127.0.0.1:3006
```

- http(koa)

```
Cooper@CooperdeMBP rpc-server-benchmark % autocannon http://127.0.0.1:3001
Running 10s test @ http://127.0.0.1:3001
10 connections


┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬──────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max  │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼──────┤
│ Latency │ 0 ms │ 0 ms │ 0 ms  │ 0 ms │ 0.01 ms │ 0.11 ms │ 8 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴──────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 21167   │ 21167   │ 30031   │ 30447   │ 28955.2 │ 2647.57 │ 21165   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 3.79 MB │ 3.79 MB │ 5.38 MB │ 5.45 MB │ 5.18 MB │ 474 kB  │ 3.79 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

0 2xx responses, 289561 non 2xx responses
290k requests in 10.01s, 51.8 MB read
```

- http(express)

```
Cooper@CooperdeMBP rpc-server-benchmark % autocannon http://127.0.0.1:3002
Running 10s test @ http://127.0.0.1:3002
10 connections


┌─────────┬──────┬──────┬───────┬──────┬─────────┬────────┬──────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev  │ Max  │
├─────────┼──────┼──────┼───────┼──────┼─────────┼────────┼──────┤
│ Latency │ 0 ms │ 0 ms │ 1 ms  │ 2 ms │ 0.22 ms │ 0.5 ms │ 7 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴────────┴──────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 6979    │ 6979    │ 11055   │ 11311   │ 10657.4 │ 1242.16 │ 6978    │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 2.87 MB │ 2.87 MB │ 4.55 MB │ 4.65 MB │ 4.38 MB │ 511 kB  │ 2.87 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

0 2xx responses, 106571 non 2xx responses
107k requests in 10.01s, 43.8 MB read
```

- http(koa-suit)

```
Cooper@CooperdeMBP rpc-server-benchmark % autocannon http://127.0.0.1:3003
Running 10s test @ http://127.0.0.1:3003
10 connections


┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬──────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max  │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼──────┤
│ Latency │ 0 ms │ 0 ms │ 0 ms  │ 0 ms │ 0.01 ms │ 0.11 ms │ 8 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴──────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 20255   │ 20255   │ 29679   │ 29983   │ 28505.6 │ 2828.78 │ 20255   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 3.63 MB │ 3.63 MB │ 5.32 MB │ 5.37 MB │ 5.1 MB  │ 506 kB  │ 3.63 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

0 2xx responses, 285070 non 2xx responses
285k requests in 10.01s, 51 MB read
```

- thrift(native)

```
Cooper@CooperdeMBP rpc-server-benchmark % PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon 127.0.0.1:3004
Running 10s test @ http://127.0.0.1:3004
10 connections


┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬───────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max   │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼───────┤
│ Latency │ 0 ms │ 0 ms │ 1 ms  │ 1 ms │ 0.12 ms │ 0.54 ms │ 23 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴───────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 8123    │ 8123    │ 15415   │ 15535   │ 14667.8 │ 2185.59 │ 8123    │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 2.08 MB │ 2.08 MB │ 3.95 MB │ 3.98 MB │ 3.75 MB │ 560 kB  │ 2.08 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

147k requests in 10.02s, 37.5 MB read
```

- thrift(koa-suit)

```
Cooper@CooperdeMBP rpc-server-benchmark % PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon 127.0.0.1:3005
Running 10s test @ http://127.0.0.1:3005
10 connections


┌─────────┬──────┬──────┬───────┬──────┬─────────┬────────┬───────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev  │ Max   │
├─────────┼──────┼──────┼───────┼──────┼─────────┼────────┼───────┤
│ Latency │ 0 ms │ 0 ms │ 1 ms  │ 2 ms │ 0.22 ms │ 0.6 ms │ 18 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴────────┴───────┘
┌───────────┬────────┬────────┬─────────┬─────────┬─────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min    │
├───────────┼────────┼────────┼─────────┼─────────┼─────────┼─────────┼────────┤
│ Req/Sec   │ 7027   │ 7027   │ 13895   │ 13991   │ 13143.8 │ 2046.39 │ 7025   │
├───────────┼────────┼────────┼─────────┼─────────┼─────────┼─────────┼────────┤
│ Bytes/Sec │ 1.8 MB │ 1.8 MB │ 3.56 MB │ 3.58 MB │ 3.36 MB │ 524 kB  │ 1.8 MB │
└───────────┴────────┴────────┴─────────┴─────────┴─────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

131k requests in 10.02s, 33.6 MB read
```

- thrift(gulu)

```
Cooper@CooperdeMBP rpc-server-benchmark % PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon 127.0.0.1:3006
Running 10s test @ http://127.0.0.1:3006
10 connections


┌─────────┬──────┬──────┬───────┬───────┬─────────┬─────────┬────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%   │ Avg     │ Stdev   │ Max    │
├─────────┼──────┼──────┼───────┼───────┼─────────┼─────────┼────────┤
│ Latency │ 1 ms │ 2 ms │ 8 ms  │ 10 ms │ 3.13 ms │ 5.69 ms │ 282 ms │
└─────────┴──────┴──────┴───────┴───────┴─────────┴─────────┴────────┘
┌───────────┬────────┬────────┬────────┬────────┬────────┬────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%  │ Avg    │ Stdev  │ Min    │
├───────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│ Req/Sec   │ 1912   │ 1912   │ 2857   │ 3319   │ 2778.5 │ 437.29 │ 1912   │
├───────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│ Bytes/Sec │ 490 kB │ 490 kB │ 732 kB │ 850 kB │ 711 kB │ 112 kB │ 489 kB │
└───────────┴────────┴────────┴────────┴────────┴────────┴────────┴────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

28k requests in 10.02s, 7.11 MB read
```

result: 1 connection 10 pipelines

| framework        | qps(avg) |
| ---------------- | -------: |
| http(koa)        |    28955 |
| http(express)    |    10657 |
| http(koa-suit)   |    28505 |
| thrift(native)   |    14667 |
| thrift(koa-suit) |    13143 |
| thrift(gulu)     |     2778 |

## result round2

```sh
autocannon -c 20 -p 50 http://127.0.0.1:3001
autocannon -c 20 -p 50 http://127.0.0.1:3002
autocannon -c 20 -p 50 http://127.0.0.1:3003

PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon -c 20 -p 50 127.0.0.1:3004
PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon -c 20 -p 50 127.0.0.1:3005
PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon -c 20 -p 50 127.0.0.1:3006
```

- http(koa)

```
Cooper@CooperdeMBP rpc-server-benchmark % autocannon -c 20 -p 50 http://127.0.0.1:3001
Running 10s test @ http://127.0.0.1:3001
20 connections with 50 pipelining factor


┌─────────┬───────┬───────┬───────┬───────┬──────────┬─────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg      │ Stdev   │ Max    │
├─────────┼───────┼───────┼───────┼───────┼──────────┼─────────┼────────┤
│ Latency │ 16 ms │ 17 ms │ 22 ms │ 30 ms │ 17.79 ms │ 4.89 ms │ 159 ms │
└─────────┴───────┴───────┴───────┴───────┴──────────┴─────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 40127   │ 40127   │ 56479   │ 57599   │ 54640   │ 4799.29 │ 40100   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 7.18 MB │ 7.18 MB │ 10.1 MB │ 10.3 MB │ 9.78 MB │ 859 kB  │ 7.18 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 11

0 2xx responses, 600993 non 2xx responses
602k requests in 11.02s, 108 MB read
```

- http(express)

```
Cooper@CooperdeMBP rpc-server-benchmark % autocannon -c 20 -p 50 http://127.0.0.1:3002
Running 10s test @ http://127.0.0.1:3002
20 connections with 50 pipelining factor


┌─────────┬───────┬───────┬────────┬────────┬──────────┬──────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5%  │ 99%    │ Avg      │ Stdev    │ Max    │
├─────────┼───────┼───────┼────────┼────────┼──────────┼──────────┼────────┤
│ Latency │ 67 ms │ 73 ms │ 114 ms │ 136 ms │ 75.45 ms │ 15.45 ms │ 319 ms │
└─────────┴───────┴───────┴────────┴────────┴──────────┴──────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 8623    │ 8623    │ 13647   │ 13951   │ 13124.8 │ 1517.25 │ 8623    │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 3.55 MB │ 3.55 MB │ 5.61 MB │ 5.73 MB │ 5.39 MB │ 623 kB  │ 3.54 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

0 2xx responses, 131250 non 2xx responses
132k requests in 10.02s, 53.9 MB read
```

- http(koa-suit)

```
Cooper@CooperdeMBP rpc-server-benchmark % autocannon -c 20 -p 50 http://127.0.0.1:3003
Running 10s test @ http://127.0.0.1:3003
20 connections with 50 pipelining factor


┌─────────┬───────┬───────┬───────┬───────┬──────────┬─────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg      │ Stdev   │ Max    │
├─────────┼───────┼───────┼───────┼───────┼──────────┼─────────┼────────┤
│ Latency │ 16 ms │ 17 ms │ 21 ms │ 34 ms │ 17.71 ms │ 5.24 ms │ 163 ms │
└─────────┴───────┴───────┴───────┴───────┴──────────┴─────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 39071   │ 39071   │ 56575   │ 57151   │ 54787.2 │ 5270.75 │ 39050   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 6.99 MB │ 6.99 MB │ 10.1 MB │ 10.2 MB │ 9.81 MB │ 943 kB  │ 6.99 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

0 2xx responses, 547850 non 2xx responses
549k requests in 10.02s, 98.1 MB read
```

- thrift(native)

```
Cooper@CooperdeMBP rpc-server-benchmark % PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon -c 20 -p 50 127.0.0.1:3004

Running 10s test @ http://127.0.0.1:3004
20 connections with 50 pipelining factor


┌─────────┬───────┬───────┬───────┬───────┬──────────┬──────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg      │ Stdev    │ Max    │
├─────────┼───────┼───────┼───────┼───────┼──────────┼──────────┼────────┤
│ Latency │ 22 ms │ 25 ms │ 35 ms │ 37 ms │ 26.93 ms │ 16.16 ms │ 408 ms │
└─────────┴───────┴───────┴───────┴───────┴──────────┴──────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬──────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Req/Sec   │ 27535   │ 27535   │ 38015   │ 41023   │ 37352.81 │ 3513.47 │ 27533   │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Bytes/Sec │ 7.05 MB │ 7.05 MB │ 9.73 MB │ 10.5 MB │ 9.56 MB  │ 899 kB  │ 7.05 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴──────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

374k requests in 10.45s, 95.6 MB read
```

- thrift(koa-suit)

```
Cooper@CooperdeMBP rpc-server-benchmark % PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon -c 20 -p 50 127.0.0.1:3005
Running 10s test @ http://127.0.0.1:3005
20 connections with 50 pipelining factor


┌─────────┬───────┬───────┬───────┬────────┬──────────┬─────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%    │ Avg      │ Stdev   │ Max    │
├─────────┼───────┼───────┼───────┼────────┼──────────┼─────────┼────────┤
│ Latency │ 18 ms │ 24 ms │ 61 ms │ 100 ms │ 30.27 ms │ 22.5 ms │ 443 ms │
└─────────┴───────┴───────┴───────┴────────┴──────────┴─────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 18815   │ 18815   │ 35775   │ 40671   │ 33187.2 │ 7784.14 │ 18800   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 4.82 MB │ 4.82 MB │ 9.16 MB │ 10.4 MB │ 8.5 MB  │ 1.99 MB │ 4.81 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

333k requests in 10.43s, 85 MB read
```

- thrift(gulu)

```
Cooper@CooperdeMBP rpc-server-benchmark % PROVIDER=/Users/Cooper/Code/rpc-server-benchmark/provider.js autocannon -c 20 -p 50 127.0.0.1:3006
Running 10s test @ http://127.0.0.1:3006
20 connections with 50 pipelining factor


┌─────────┬────────┬────────┬────────┬────────┬──────────┬─────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg      │ Stdev   │ Max    │
├─────────┼────────┼────────┼────────┼────────┼──────────┼─────────┼────────┤
│ Latency │ 262 ms │ 272 ms │ 470 ms │ 516 ms │ 286.6 ms │ 49.6 ms │ 619 ms │
└─────────┴────────┴────────┴────────┴────────┴──────────┴─────────┴────────┘
┌───────────┬────────┬────────┬────────┬────────┬─────────┬────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%  │ Avg     │ Stdev  │ Min    │
├───────────┼────────┼────────┼────────┼────────┼─────────┼────────┼────────┤
│ Req/Sec   │ 1970   │ 1970   │ 3653   │ 3765   │ 3475.46 │ 499.5  │ 1970   │
├───────────┼────────┼────────┼────────┼────────┼─────────┼────────┼────────┤
│ Bytes/Sec │ 505 kB │ 505 kB │ 935 kB │ 964 kB │ 890 kB  │ 128 kB │ 504 kB │
└───────────┴────────┴────────┴────────┴────────┴─────────┴────────┴────────┘

Req/Bytes counts sampled once per second.
# of samples: 11

39k requests in 11.3s, 9.79 MB read
```

result: 20 connection 50 pipelines

| framework        | qps(avg) |
| ---------------- | -------: |
| http(koa)        |    54640 |
| http(express)    |    13124 |
| http(koa-suit)   |    54787 |
| thrift(native)   |    37352 |
| thrift(koa-suit) |    33187 |
| thrift(gulu)     |     3475 |

<br/>

All tests run on my MacBook Pro

```
MacBook Pro (16-inch, 2019)
2.6 GHz 六核Intel Core i7
16 GB 2667 MHz DDR4
AMD Radeon Pro 5300M 4 GB
Intel UHD Graphics 630 1536 MB
```
