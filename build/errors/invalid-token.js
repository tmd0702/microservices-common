"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidTokenError = void 0;
const custom_error_1 = require("./custom-error");
class InvalidTokenError extends custom_error_1.CustomError {
    constructor() {
        super('Invalid token');
        this.statusCode = 401;
        Object.setPrototypeOf(this, InvalidTokenError.prototype);
    }
    serializeErrors() {
        return [{ message: 'Invalid token' }];
    }
}
exports.InvalidTokenError = InvalidTokenError;
