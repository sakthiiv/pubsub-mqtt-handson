var color = {
	red: '\x1b[31m',
	green: '\x1b[32m',
	cyan: '\x1b[36m'
}, colorReset = '\x1b[0m';

var log = {}, topics = {
  clientCount: "clients",
  messaging: "technologies"
}, settings = {
  port: 1989,
  http: {
    port: 1990,
    bundle: true,
    static: './'
  },
  stats: true
};

log.logImpMessage = function (message) {
  var logEntry = color.cyan + this.validateMessage(message) + colorReset;
  return logEntry;
};

log.logWarning = function (message) {
  var logEntry = color.red + this.validateMessage(message) + colorReset;
  return logEntry;
};

log.logMessage = function (message) {
  var logEntry = color.green + this.validateMessage(message) + colorReset;
  return logEntry;
};

log.validateMessage = function (message) {
  return message ? message: '';
};

exports.log = log;
exports.topics = topics;
exports.settings = settings;