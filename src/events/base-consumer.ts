import {Consumer as KafkaConsumer, KafkaMessage, logLevel, EachMessagePayload} from 'kafkajs';
import { Topics } from './topics';
import {KafkaWrapper} from "./kafka-wrapper";
import {randomUUID} from "crypto";

interface Event {
    topic: Topics;
    data: any;
}

export abstract class Consumer<T extends Event> {
    abstract topic: T['topic'];
    // protected client: KafkaConsumer;
    abstract onMessage(data: T['data']): void;

    subscriptionOptions(client: KafkaConsumer) {
        client.logger().setLogLevel(logLevel.ERROR);
    }

    async consume() {
        const kafkaWrapper = new KafkaWrapper(['localhost:9092'], randomUUID());
        await kafkaWrapper.connect();
        const client: KafkaConsumer = kafkaWrapper.consumer;
        await client.subscribe( { topic: this.topic }); //fromBeginning: true
        this.subscriptionOptions(client);
        console.log(`Consumer subscribed to ${this.topic}!`);
        await client.run({
            eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
                console.log(`Message received: ${this.topic} / ${partition}`);
                const parsedData = this.parseMessage(message);
                this.onMessage(parsedData);
            }
        });
    }

    parseMessage(msg: KafkaMessage) {
        const data = msg.value?.toString();
        if (!data) return null;
        else {
            return JSON.parse(data);
        }

    }

}
