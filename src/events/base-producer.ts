import { Producer as KafkaProducer } from 'kafkajs';
import { v4 as uuidv4 } from 'uuid';

const config = require("config");
import { Topics } from './topics';

interface Event {
    topic: Topics;
    data: any;
}
export abstract class Producer<T extends Event> {
    abstract topic: T['topic'];

    protected client: KafkaProducer;
    constructor(client: KafkaProducer) {
        this.client = client;
    }

    produce(data: T['data']): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client.send({
                topic: this.topic,
                messages: [
                    {
                        key: uuidv4(),
                        value: JSON.stringify(data),
                    },
                ],
            }).then((metadata) => {
                resolve();
            }).catch((error) => {
                reject(error);
            })
        });
    }
}
