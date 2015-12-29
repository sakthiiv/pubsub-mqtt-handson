pubsub-mqtt-handson
============

To unveil the capabilities of MQTT protocol (publish subscribe messaging pattern)

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
