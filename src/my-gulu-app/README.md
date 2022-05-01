## 开发调试

可通过命令行快速启动开发服务器

```bash
$ npm run dev
```

 项目模板内置了 VSCode 的调试配置，如果需要断点调试，也可通过 VSCode 的启动器启动应用。

![断点调试](http://tosv.byted.org/obj/tostest/WX20190311-153512.png)

### 服务发现切换

> 脚手架默认内置 BOE 环境的 ROUTE_IP，如需切换，需要修改 package.json 的启动脚本

可通过`ROUTE_IP`环境变量来切换不同的环境，`ROUTE_IP=x.x.x.x`的值为对应机房的 IP

例如`GULU_ENV=dev ROUTE_IP=10.225.84.22 nodemon bootstrap.js`其中`10.225.84.22`是`Boe`实例的 IP，那么服务就会以`BOE`环境启动

#### 如何获取 _BOE_ 环境的 IP 地址

- 使用`devbox`开发机的 IP (需在开发机中执行`sudo /opt/tiger/consul_devbox/bin/switch.sh boe`来把`consul`切换到 BOE)
- 使用`TCE BOE`实例的 IP

#### 如何获取 _线上_ 环境的 IP 地址

- 使用`devbox`开发机的 IP (需在开发机中执行`sudo /opt/tiger/consul_devbox/bin/switch.sh langfang`来把`consul`切换到 lf)
- 使用线上`TCE`实例的 IP

#### 设置 ROUTE_IP 无效

确认系统中是否存在以下环境变量，如果存在，需将对应环境变量删除，或修改为 ROUTE_IP 的值

- CONSUL_HTTP_HOST
- MY_HOST_IP
- TCE_HOST_IP
