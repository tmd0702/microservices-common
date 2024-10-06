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
    // Department
    Topics["DepartmentCreated"] = "department.created";
    Topics["DepartmentUpdated"] = "department.updated";
    // Employee
    Topics["EmployeeCreated"] = "employee.created";
    Topics["EmployeeUpdated"] = "employee.updated";
    // Camera
    Topics["CameraCreated"] = "camera.created";
    Topics["CameraUpdated"] = "camera.updated";
    Topics["LocationCreated"] = "location.created";
    Topics["LocationUpdated"] = "location.updated";
    // Streaming
    Topics["CameraStreamingB4"] = "camera.streaming.b4";
    Topics["CameraStreamingB3"] = "camera.streaming.b3";
    Topics["CameraStreamingB2"] = "camera.streaming.b2";
    Topics["CameraStreamingB1"] = "camera.streaming.b1";
    Topics["CameraStreamingG"] = "camera.streaming.g";
    Topics["CameraStreaming01"] = "camera.streaming.01";
    Topics["CameraStreaming02"] = "camera.streaming.02";
    Topics["CameraStreaming03"] = "camera.streaming.03";
    Topics["CameraStreaming04"] = "camera.streaming.04";
})(Topics || (exports.Topics = Topics = {}));
