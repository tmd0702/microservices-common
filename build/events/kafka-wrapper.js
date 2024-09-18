"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaWrapper = void 0;
const kafkajs_1 = require("kafkajs");
class KafkaWrapper {
    constructor(brokers, groupId) {
        this.isProducerConnected = false;
        this.isConsumerConnected = false;
        const kafkaConfig = { brokers: brokers };
        const kafka = new kafkajs_1.Kafka(kafkaConfig);
        this._producer = kafka.producer();
        this._consumer = kafka.consumer({ groupId: groupId });
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
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                yield ((_a = this._consumer) === null || _a === void 0 ? void 0 : _a.disconnect());
                console.log('Consumer disconnected');
                yield ((_b = this._producer) === null || _b === void 0 ? void 0 : _b.disconnect());
                console.log('Producer disconnected');
            }
            catch (error) {
                console.error('Error disconnecting producer:', error);
            }
        });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._consumer.connect();
            this.isConsumerConnected = true;
            yield this._producer.connect();
            this.isProducerConnected = true;
        });
    }
}
exports.KafkaWrapper = KafkaWrapper;
