var Client = require('strong-pubsub'),
util = require('util'),
Adapter = require('strong-pubsub-mqtt'),
config = require('../config/config.json'),
common = require('../common/common.js'),
log = common.log, topics = common.topics, settings = common.settings;

var client1 = new Client({host: 'localhost', port: settings.port}, Adapter);

console.log(log.logImpMessage("\nClient 1 Started ..."));

client1.subscribe(topics.messaging);
client1.on('message', function(topic, msg) {
 var message = log.logImpMessage("Message Received: \n");
 message += log.logMessage("Topic: ") + topic + "\n";
 message += log.logMessage("Message: ") + msg + "\n";
 console.log(message);
});

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (text) {
	text = text.replace(/\r?\n|\r/,"");
	client1.publish(topics.messaging, text);
});