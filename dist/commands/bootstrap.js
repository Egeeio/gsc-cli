// Generated by CoffeeScript 2.4.1
(function() {
  var BootstrapCommand, Chalk, Command, GameServer, exec, execSync, flags, fs, spawn;

  fs = require("fs").promises;

  Chalk = require("chalk");

  GameServer = require("../server_builder");

  ({Command, flags} = require('@oclif/command'));

  ({execSync, exec, spawn} = require('child_process'));

  BootstrapCommand = class BootstrapCommand extends Command {
    async run() {
      var configFiles, replaceName, srcPath;
      srcPath = `/home/${process.env.USER}/.local/gsd-cli`;
      execSync(`rm -rf ${srcPath}`);
      execSync(`git clone https://github.com/Egeeio/gsd-cli.git ${srcPath}`);
      configFiles = (await fs.readdir(`${srcPath}/configs`));
      replaceName = function(file) {
        return execSync(`sed -i "s/travis/${process.env.USER}/" ${srcPath}/configs/${file}`);
      };
      return configFiles.forEach(function(file) {
        return replaceName(file);
      });
    }

  };

  BootstrapCommand.description = "Bootstrap some game config files";

  module.exports = BootstrapCommand;

}).call(this);

//# sourceMappingURL=bootstrap.js.map