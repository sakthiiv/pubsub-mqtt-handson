var mosca = require('mosca'),
common = require('./common/common.js'),
clientTopic = 'clients', log = common.log, settings = common.settings;

/*var settings = {
  port: 1989,
  http: {
    port: 1990,
    bundle: true,
    static: './'
  },
  stats: true
};*/

var messages = {
	moscaUp: "Mosca server running ... MQTT Port: " + settings.port + " HTTP Port: " + settings.http.port
};

//here we start mosca
var server = new mosca.Server(settings);
server.on('ready', start);

// fired when the mqtt server is ready
function start() {
  console.log(log.logImpMessage(messages.moscaUp));
};

server.on('clientConnected', function(client) {
  console.log(log.logMessage('Client Connected, ID: ' + client.id));
	client.server.publish({"topic": "clients", "payload": client.server.stats.connectedClients.toString()}, client);
});

server.on('clientDisconnecting', function(client) {
  console.log(log.logWarning('Client Disconnected, ID: ' + client.id));
});

server.on('clientDisconnected', function(client) {
	console.log(log.logWarning('Client Disconnected, ID: ' + client.id));
	client.server.publish({"topic": "clients", "payload": client.server.stats.connectedClients.toString()}, client);
});

server.on('published', function(packet, client) {
  //console.log('Published: ', packet.payload);
});

server.on('subscribed', function(topic, client) {
  //console.log('subscribed : ', topic);
});

server.on('unsubscribed', function(topic, client) {
  //console.log('unsubscribed : ', topic);
});
