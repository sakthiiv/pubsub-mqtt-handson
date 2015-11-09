var client = mqtt.connect('ws://localhost:1990/');
var clientTopic = 'clients', technologyTopic = 'technologies';
client.subscribe(technologyTopic);
client.subscribe(clientTopic);

client.on("connect", function() {
	setServerStatus('Server Connected', true);
});

client.on("reconnect", function() {
	setServerStatus('Trying to Reconnect ...');
});

client.on("close", function() {
	setServerStatus('Server Disconnected');
});

client.on("offline", function() {
	setServerStatus('client is offline.');
});

client.on("message", function(topic, payload, packets) {
	console.log(topic);
	console.log(payload);
	messageNotifier(topic, payload);
	//client.end();
});



function messageNotifier(topic, payload) {

	/*$("#message-container").fadeIn(1000, "linear", function() {
		setTimeout(function(){
			$("#message-container").fadeOut(1000, "linear");
		}, 6000)
	});*/
	
	if (topic == clientTopic && payload.toString().length) {
		$("#connectedClients").empty().append(payload.toString());
	}

	if (topic == technologyTopic) {
		appendPublishedMessages(topic, payload);
	}
	
};

function appendPublishedMessages(topic, payload) {
	var payloadDiv = $('<div class="published">' + payload.toString() + '</div>');
	var div = $('<div><div class="code"> > </div></div>').append(payloadDiv).append('<br/>');
	$("#publishedMessages").append(div);
};

function setServerStatus(message, success) {
	$("#lblServerStatus").text(message).attr('class', (success ? 'status-green' : 'status-red'));
};

$(document).ready(function() {
	$("#btnNotify").on("click", function () {
		if ($("#txtMessage").val().length > 0) {
			client.publish("technologies", $("#txtMessage").val());
		}
		//client.end();	
	});	
	$("#publishedMessages").empty();
});