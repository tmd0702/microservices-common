import { Consumer as KafkaConsumer, KafkaMessage } from 'kafkajs';
import { Topics } from './topics';
interface Event {
    topic: Topics;
    data: any;
}
export declare abstract class Consumer<T extends Event> {
    abstract topic: T['topic'];
    protected client: KafkaConsumer;
    abstract onMessage(data: T['data']): void;
    constructor(client: KafkaConsumer);
    subscriptionOptions(): void;
    consume(): Promise<void>;
    parseMessage(msg: KafkaMessage): any;
}
export {};
