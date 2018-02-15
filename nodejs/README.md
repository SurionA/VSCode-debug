# NODEJS remote debug with VSCode

## Requirement

* node version: [<= 8.0.0](https://nodejs.org/en/download/)
* code editor: [VSCode](https://code.visualstudio.com)

## VSCode debug configuration

```json
{
  "type": "node",
  "request": "attach",
  "name": "NodeJS attach to Remote",
  "address": "127.0.0.1",
  "port": 9229,
  "localRoot": "${workspaceFolder}",
  "remoteRoot": "/src/nodejs/"
}
```

* `address`: Your local address
* `port`: Debugger listening on. Default is 9229
* `localRoot`: Path to the local code
* `remoteRoot`: Path to the remote code

## Docker container

On docker container you need to expose and map the debugging port. You have to run your script with the flag `--inspect-brk=0.0.0.0:9229` to be able to attach. The port is configurable.

Build the docker image from the [Dockerfile](Dockerfile)

```shell
$ docker build -t local/remote-debug-nodejs .
```

Then run the container

```shell
$ docker run -d -p 9229:9229 local/remote-debug-nodejs
```

Now let's run the VSCode debugger. Should break at the first line of [index.js](source/index.js)

## SSH

You need to create a ssh tunnel and forward the debugging remote port.

```shell
$ ssh -L local-port:HOSTNAME:remote-port remote-host
```

* Install [node](https://nodejs.org/en) on your server
* Copy the files in source to your remote server in `/src/nodejs/`
* Then setup your sample by running

```shell
$ cd /srv/nodejs
$ npm i
$ npm run debug
```

Now let's run the VSCode debugger. Should break at the first line of [index.js](source/index.js)
