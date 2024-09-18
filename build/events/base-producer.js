"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producer = void 0;
const uuid_1 = require("uuid");
const config = require("config");
class Producer {
    constructor(client) {
        this.client = client;
    }
    produce(data) {
        return new Promise((resolve, reject) => {
            this.client.send({
                topic: this.topic,
                messages: [
                    {
                        key: (0, uuid_1.v4)(),
                        value: JSON.stringify(data),
                    },
                ],
            }).then((metadata) => {
                resolve();
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
exports.Producer = Producer;
