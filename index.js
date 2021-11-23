import mqtt from 'mqtt';

const inTopic = `openflowx/${ process.env.EVENT_NAME || "in" }`
const outTopic = `openflowx/${ process.env.EVENT_NAME || "out" }`

var client = mqtt.connect('mqtt://rabbitmq-service:1883',{clientId:'mqttjs02'});
client.on("connect", () => {
  console.log('connected')
  client.subscribe(topic,{qos: 1})
});
client.on("error", (e) => { console.log(`Can't connect ${e}`) });
client.on("message", (inTopic, message, packet) => {
  console.log(`got ${topic} message, sendng to ${outTopic}`);
  client.publish(outTopic, message);
})

