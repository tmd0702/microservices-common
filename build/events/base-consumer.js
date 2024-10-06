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
exports.Consumer = void 0;
const kafkajs_1 = require("kafkajs");
const kafka_wrapper_1 = require("./kafka-wrapper");
const crypto_1 = require("crypto");
class Consumer {
    constructor() {
        const kafkaWrapper = new kafka_wrapper_1.KafkaWrapper(['localhost:9092'], (0, crypto_1.randomUUID)());
        kafkaWrapper.connect();
        this.client = kafkaWrapper.consumer;
    }
    subscriptionOptions() {
        this.client.logger().setLogLevel(kafkajs_1.logLevel.ERROR);
    }
    consume() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.subscribe({ topic: this.topic }); //fromBeginning: true
            this.subscriptionOptions();
            console.log(`Consumer subscribed to ${this.topic}!`);
            yield this.client.run({
                eachMessage: (_a) => __awaiter(this, [_a], void 0, function* ({ topic, partition, message }) {
                    console.log(`Message received: ${this.topic} / ${partition}`);
                    const parsedData = this.parseMessage(message);
                    this.onMessage(parsedData);
                })
            });
        });
    }
    parseMessage(msg) {
        var _a;
        const data = (_a = msg.value) === null || _a === void 0 ? void 0 : _a.toString();
        if (!data)
            return null;
        else {
            return JSON.parse(data);
        }
    }
}
exports.Consumer = Consumer;
