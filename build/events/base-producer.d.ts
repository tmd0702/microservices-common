import { Producer as KafkaProducer } from 'kafkajs';
import { Topics } from './topics';
interface Event {
    topic: Topics;
    data: any;
}
export declare abstract class Producer<T extends Event> {
    abstract topic: T['topic'];
    protected client: KafkaProducer;
    constructor(client: KafkaProducer);
    produce(data: T['data']): Promise<void>;
}
export {};
