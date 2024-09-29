import { Producer, Consumer } from 'kafkajs';
export declare class KafkaWrapper {
    private _producer;
    private _consumer;
    protected isProducerConnected: boolean;
    protected isConsumerConnected: boolean;
    constructor(brokers: string[], groupId: string);
    get producer(): Producer;
    get consumer(): Consumer;
    disconnect(): Promise<void>;
    connect(): Promise<void>;
}
