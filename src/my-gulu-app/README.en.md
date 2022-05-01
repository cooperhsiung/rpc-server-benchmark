## Developing & Debugging

Quickly starting up the development server from the command line

```bash
$ npm run dev
```

The project template has built-in VSCode debugging configuration, and if you need breakpoint debugging, you can also start the application through VSCode's launcher.

![Debugger](http://tosv.byted.org/obj/tostest/WX20190311-153512.png)

### Service Discovery Switch

> The template has a built-in BOE environment `ROUTE_IP` by default. If you need to switch it, you need to modify the start script of the package.json

You can chang the environment variable `ROUTE_IP` to switch between different environments. I.e. `ROUTE_IP=x.x.x.x`. The value is the IP of the corresponding machine room.

For example, `GULU_ENV=dev ROUTE_IP=10.225.84.22 nodemon bootstrap.js`, of which `10.225.84.22` is an instance of the `Boe` environment. Then the service will start under the `BOE` environment.

#### How to get the IP address of the _BOE_ environment

- Use the IP of `devbox` (you need to execute `sudo /opt/tiger/consul_devbox/bin/switch.sh boe` first to switch `consul` to BOE environment)
- Use the IP of `TCE BOE` instance

#### How to get the IP address of the _online_ environment

- Use the IP of `devbox` (you need to execute `sudo /opt/tiger/consul_devbox/bin/switch.sh langfang` first to switch `consul` to BOE environment)
- Use the IP of `TCE BOE` instance

#### Setting ROUTE_IP Not Working

Check whether the following environment variables exist in the system, and if so, delete the corresponding environment variables or modify them to the value of ROUTE_IP

- CONSUL_HTTP_HOST
- MY_HOST_IP
- TCE_HOST_IP
