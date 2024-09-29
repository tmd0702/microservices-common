"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topics = void 0;
var Topics;
(function (Topics) {
    // User
    Topics["UserCreated"] = "user.created";
    Topics["UserUpdated"] = "user.updated";
    // Auth
    Topics["EmailVerificationNeeded"] = "verification.email";
    Topics["EmailVerificationCompleted"] = "verification.email.complete";
    Topics["SMSVerificationNeeded"] = "verification.sms";
    Topics["SMSVerificationCompleted"] = "verification.sms.complete";
    // Store
    Topics["StoreCreated"] = "store.created";
    Topics["StoreUpdated"] = "store.updated";
    // Item
    Topics["ItemCreated"] = "item.created";
    Topics["ItemUpdated"] = "item.updated";
    // Payment
    Topics["PaymentCreated"] = "payment.created";
    // Order
    Topics["OrderCreated"] = "order.created";
    Topics["OrderCancelled"] = "order.cancelled";
})(Topics || (exports.Topics = Topics = {}));
