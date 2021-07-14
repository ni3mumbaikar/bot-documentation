var exec = require("child_process").exec;

function execute(command, callback) {
  exec(command, function (error, stdout, stderr) {
    callback(stdout);
  });
}

const botstate = execute("pm2 status | grep index", (status) => {
  if (String(status).includes("online")) {
    return true;
  }
  return false;
});

module.exports = botstate;
