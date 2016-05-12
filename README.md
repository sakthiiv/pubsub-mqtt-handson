pubsub-mqtt-handson
============

To unveil the capabilities of MQTT protocol (publish subscribe messaging pattern)

### Introduction

##### *What is MQTT?*

* MQTT is a publish/subscribe messaging protocol. It stands for MQ Telemetry Transport.
* It has been designed to be an extremely simple and lightweight protocol. 
* The targeted systems for this protocol are devices with extremely constrained network bandwidth and places where networks are unreliable with high-latency. 
* The protocol standards are to use minimal network bandwidth and reduce battery power of devices while ensuring reliability and assurance in delivery to an extent. 
* MQTT protocol is ideal for machine-to-machine or Internet of Things (IoT) world of connected devices.
* It is used on top of TCP/IP protocol.

##### *Security in MQTT*

* Passing user name and password is feasible with an MQTT packet in V3.1 of the protocol. 
* Network encryption should be handled with SSL which is independent of the MQTT protocol. 
* Encryption is not built into MQTT protocol as the sole purpose of the protocol was to make it lightweight and simple. 
* It is worth noting that SSL adds network overhead as it is not a simple protocol. 
* Additional encryption of messages can be applied by a separate service / application.

##### *Topic*

* Messages are published to a logical channel called as “topics”. 
* A subscriber can subscribe to a specific topic. All the subscribers for a topic will receive the same message published.

##### *MQTT Specification*

https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=mqtt

### Terminologies

##### *Client*

A unified client class (Can be used as a publisher or subscriber) which supports subscribing to topics. It can connect to broker or a bridge which supports the same protocol used by the current client’s adaptor.

##### *Broker*

A broker is a server that acts as a routing system for messages. It routes the messages published to all the subscribed clients.
[Mosquito](http://mosquitto.org/) is commonly used message broker.

##### *Bridge*

A bridge creates a connection between two MQTT brokers. Bridge can be used in cases where a client should not connect directly to a Broker.
It helps us to include logic for verifying authenticity of messages and clients.

##### *Adapter*

An Adapter to specify the type of transport and protocol.

### Dependencies

Follow these steps

1. Install local dev dependencies: __``npm install``__ in __``~/pubsub-mqtt-handson/native``__

--


##### *UI Server*

1. Start WebServer: __``node web-server.js``__ in __``~/pubsub-mqtt-handson``__ or open **_server.bat_**.
2. Navigate to [localhost on port 4040](http://localhost:4040/)

![image](https://cloud.githubusercontent.com/assets/6268662/12030914/ad136a46-ae2b-11e5-83aa-81e574f09ed3.png)

--



##### *Broker*

1. Start Broker: __``node mosca-server.js``__ in __``~/pubsub-mqtt-handson/native``__ or open **_server.bat_**
2. UI client will get connected to the broker

![image](https://cloud.githubusercontent.com/assets/6268662/12030939/137ca5e0-ae2c-11e5-8c21-8c294f3d20e0.png)

--



##### *Clients*

1. Start Clients: __``node client-1.js``__ and __``node client-2.js``__ and __``node client-3.js``__ in __``~/pubsub-mqtt-handson/native/clients``__ or open **_client.bat_** in __``~/pubsub-mqtt-handson/native``__
2. Clients will start to listen and a log will be displayed in Broker.
3. UI Will show the number of clients connected, 4 (including UI client)
4. Type a message in UI _(Eg.Send SOS)_ and it will be broadcasted to the connected clients.

![image](https://cloud.githubusercontent.com/assets/6268662/12030636/d228bb32-ae27-11e5-8a58-9a98f9886aba.png)

![image](https://cloud.githubusercontent.com/assets/6268662/12031240/a6fc46ec-ae2f-11e5-8d57-20f6395dc268.png)

***

##### *References*

* http://mqtt.org/
* http://mqtt.org/faq
* https://en.wikipedia.org/wiki/MQTT
* https://strongloop.com/strongblog/introducing-strongloops-unopinionated-pubsub/

