var Client = require('strong-pubsub'),
util = require('util'),
Adapter = require('strong-pubsub-mqtt'),
config = require('../config/config.json'),
common = require('../common/common.js'),
log = common.log, topics = common.topics, settings = common.settings;

var client2 = new Client({host: 'localhost', port: settings.port}, Adapter);

console.log(log.logImpMessage("\nClient 2 Started ..."));

client2.subscribe(topics.messaging);
client2.on('message', function(topic, msg) {
 var message = log.logImpMessage("Message Received: \n");
 message += log.logMessage("Topic: ") + topic + "\n";
 message += log.logMessage("Message: ") + msg + "\n";
 console.log(message);
});