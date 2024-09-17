import {Consumer as KafkaConsumer, KafkaMessage, logLevel, EachMessagePayload} from 'kafkajs';
import { Subjects } from './subjects';

interface Event {
    subject: Subjects;
    data: any;
}

export abstract class Consumer<T extends Event> {
    abstract subject: T['subject'];
    protected client: KafkaConsumer;
    abstract topicName: string;
    abstract onMessage(data: T['data'], message: KafkaMessage): void;

    constructor(client: KafkaConsumer) {
        this.client = client;
    }
    subscriptionOptions() {
        this.client.logger().setLogLevel(logLevel.ERROR);
    }

    async consume() {
        await this.client.connect();
        await this.client.subscribe({ topic: this.topicName, fromBeginning: true});
        this.subscriptionOptions()
        console.log('Consumer connected and subscribed!');
        await this.client.run({
            eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
                console.log(`Message received: ${this.subject} / ${this.topicName} / ${partition}`);
                const parsedData = this.parseMessage(message);
                this.onMessage(parsedData, message);
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
