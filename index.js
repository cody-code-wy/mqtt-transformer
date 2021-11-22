import mqtt from 'mqtt';

var client = mqtt.connect('mqtt://rabbitmq-service:1883',{clientId:'mqttjs01'});
client.on("connect", () => {
  console.log('connected')
  client.publish("testtopic", "test message")
});
client.on("error", (e) => { console.log(`Can't connect ${e}`) });

