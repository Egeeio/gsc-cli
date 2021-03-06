# gsd-cli [![CircleCI](https://circleci.com/gh/Egeeio/gsd-cli.svg?style=svg)](https://circleci.com/gh/Egeeio/gsd-cli)

[![Maintainability](https://api.codeclimate.com/v1/badges/004676926e67e920ef77/maintainability)](https://codeclimate.com/github/Egeeio/gsd-cli/maintainability)
[![Discord](https://discordapp.com/api/guilds/183740337976508416/widget.png?style=shield)](https://discord.gg/EMbcgR8)

gsd-cli is a convenient CLI tool for automating the installation of dedicated game servers as systemd units (daemons).

gsd-cli is built on systemd and makes use of many Linux-specific commands. As such, gsd-cli is only supported on Linux at this time.

## Installation

gsd-cli is designed to be installed as a Ruby Gem [![Gem Version](https://badge.fury.io/rb/gsd-cli.svg)](https://badge.fury.io/rb/gsd-cli) and executed from the terminal like any CLI application. Install gsd-cli on your favorite Linux machine with the following command: `gem install gsd-cli`

## Usage

### Root Required

gsd-cli is *currently* designed to be run as root.

Dedicated game servers are installed to `/opt/` by default (which requires elevated permissions on most distros) and installing new systemd units also requires elevated permissions.

This pattern is handy for LXD containers or dedicated server hosts in Cloud environments. This pattern is _not_ practical for general or home-server use and will be [fixed](https://github.com/Egeeio/gsd-cli/issues/12) in the future.

### Getting Started

The target deployment environment for dedicated servers installed with gsd-cli are LXD containers or Cloud server hosts, such as AWS EC2s or Linode instances.

Dedicated servers are installed to `/opt/` by default. So installing a minecraft server will result in a new folder at `/opt/minecraft` and a new systemd unit file at `/etc/systemd/system/minecraft.service`.

You manage the configuration for game servers like you would normally. You shouldn't need to modify the `.service` file.

Usage examples:

`gsd-cli install minecraft` - will install a Spigot Minecraft server.

`gsd-cli update gmod` - will update a Garry's Mod server installed with gsd-cli.

**Supported Games:**

* 7 Days to Die
* Garrys Mod
* Minecraft
* Rust
* Team Fortress 2
