import {Consumer as KafkaConsumer, KafkaMessage, logLevel, EachMessagePayload} from 'kafkajs';
import { Topics } from './topics';

interface Event {
    topic: Topics;
    data: any;
}

export abstract class Consumer<T extends Event> {
    abstract topic: T['topic'];
    protected client: KafkaConsumer;
    abstract onMessage(data: T['data']): void;

    constructor(client: KafkaConsumer) {
        this.client = client;
    }
    subscriptionOptions() {
        this.client.logger().setLogLevel(logLevel.ERROR);
    }

    async consume() {
        await this.client.subscribe( { topic: this.topic }); //fromBeginning: true
        this.subscriptionOptions()
        console.log(`Consumer subscribed to ${this.topic}!`);
        await this.client.run({
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
