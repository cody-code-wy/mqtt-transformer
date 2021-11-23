import mqtt from 'mqtt';

var client = mqtt.connect('mqtt://rabbitmq-service:1883',{clientId:'mqttjs02'});
client.on("connect", () => {
  console.log('connected')
  client.subscribe("testtopic",{qos: 1})
});
client.on("error", (e) => { console.log(`Can't connect ${e}`) });
client.on("message", (topic, message, packet) => {
  console.log(`topic is ${topic}`);
  console.log(`message is ${message}`);
})

