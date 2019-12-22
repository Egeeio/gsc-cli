gsd-cli v2 [![Build Status](https://travis-ci.org/Egeeio/gsd-cli.svg?branch=master)](https://travis-ci.org/Egeeio/gsd-cli)
=======

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Discord](https://discordapp.com/api/guilds/183740337976508416/widget.png?style=shield)](https://discord.gg/EMbcgR8)

<!-- toc -->

<!-- tocstop -->
## Usage
<!-- usage -->
```sh-session
$ npm install -g gsd-cli
running command...
$ gsd-cli COMMAND
running command...
$ gsd-cli (-v|--version)
gsd-cli/0.1.0 linux-x64 node-v12.13.0
$ gsd-cli --help [COMMAND]
USAGE
  $ gsd-cli COMMAND
...
```
<!-- usagestop -->
## Commands
<!-- commands -->
* [`gsd-cli help [COMMAND]`](#gsd-cli-help-command)
* [`gsd-cli install`](#gsd-cli-install)
* [`gsd-cli update`](#gsd-cli-update)

## `gsd-cli help [COMMAND]`

display help for gsd-cli

```
USAGE
  $ gsd-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.2/src/commands/help.ts)_

## `gsd-cli install`

install a dedicated game server as a daemon

```
USAGE
  $ gsd-cli install

OPTIONS
  -d, --dryrun     test installing a server without actually installing it
  -n, --name=name  (required) game server to install
  -p, --path=path  path the game server will be installed to
```

_See code: [dist/commands/install.js](https://github.com/Egeeio/gsd-cli/blob/v0.1.0/dist/commands/install.js)_

## `gsd-cli update`

Updates an installed dedicated game server

```
USAGE
  $ gsd-cli update

OPTIONS
  -n, --name=name  game server to launch
  -p, --path=path  path the game server is installed at
```

_See code: [dist/commands/update.js](https://github.com/Egeeio/gsd-cli/blob/v0.1.0/dist/commands/update.js)_
<!-- commandsstop -->
