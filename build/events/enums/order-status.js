"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["CREATED"] = "created";
    OrderStatus["AWAITING_PAYMENT"] = "awaiting:payment";
    OrderStatus["CANCELLED"] = "cancelled";
    OrderStatus["COMPLETE"] = "complete";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
