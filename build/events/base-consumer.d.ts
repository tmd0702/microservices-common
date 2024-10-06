import { Consumer as KafkaConsumer, KafkaMessage } from 'kafkajs';
import { Topics } from './topics';
interface Event {
    topic: Topics;
    data: any;
}
export declare abstract class Consumer<T extends Event> {
    abstract topic: T['topic'];
    abstract onMessage(data: T['data']): void;
    subscriptionOptions(client: KafkaConsumer): void;
    consume(): Promise<void>;
    parseMessage(msg: KafkaMessage): any;
}
export {};
