import { Producer as KafkaProducer } from 'kafkajs';

const config = require("config");
import { Subjects } from './subjects';

interface Event {
    subject: Subjects;
    data: any;
}
export abstract class Producer<T extends Event> {
    abstract subject: T['subject'];
    abstract topicName: string;
    protected client: KafkaProducer;
    protected ackWait = 5 * 1000;

    constructor(client: KafkaProducer) {
        this.client = client;
    }

    produce(data: T['data']): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client.send({
                topic: this.topicName,
                messages: [
                    data
                ],
            }).then((metadata) => {
                resolve();
            }).catch((error) => {
                reject(error);
            })
        });
    }
}
