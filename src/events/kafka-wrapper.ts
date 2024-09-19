import { Producer, Consumer, Kafka, KafkaConfig } from 'kafkajs';

export class KafkaWrapper {
    private _producer: Producer;
    private _consumer: Consumer;
    protected isProducerConnected: boolean = false;
    protected isConsumerConnected: boolean = false;

    constructor(brokers: string[], groupId: string) {
        const kafkaConfig: KafkaConfig = { brokers: brokers }
        const kafka = new Kafka(kafkaConfig);
        this._producer = kafka.producer();
        this._consumer = kafka.consumer({groupId: groupId, heartbeatInterval: 10000});
    }

    get producer() {
        if (!this.isProducerConnected) {
            throw new Error('Cannot access Kafka Producer before connecting');
        }

        return this._producer;
    }
    get consumer() {
        if (!this.isConsumerConnected) {
            throw new Error('Cannot access Kafka Consumer before connecting');
        }

        return this._consumer;
    }
    async disconnect(): Promise<void> {
        try {
            await this._consumer?.disconnect();
            console.log('Consumer disconnected');
            await this._producer?.disconnect();
            console.log('Producer disconnected');
        } catch (error) {
            console.error('Error disconnecting producer:', error);
        }
    }
    async connect() {
        await this._consumer.connect()
        this.isConsumerConnected = true;
        await this._producer.connect();
        this.isProducerConnected = true;
    }
}