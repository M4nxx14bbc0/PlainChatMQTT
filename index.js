import * as dotenv from "dotenv";
import * as mqtt from 'mqtt';
dotenv.config();

const options = {
    host: 'ba7bc35a5ec54cca8379e73497f18289.s2.eu.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'manu9593',
    password: process.env.AUTH_STRING
}
const client = mqtt.connect(options);
client.on('connect',()=>{
    console.log('Connected');
})
client.on('message', (topic, message)=>{
    console.log("Received message: ", topic, message.toString());
});
client.on('error',(err)=>{
    console.error(err);
});
client.on('disconnect',(data)=>{
    console.log(data);
    console.info("Disconnection from server");
})

client.subscribe("my/test/topic");
client.publish("my/test/topic","Hello");
