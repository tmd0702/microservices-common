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
})(Topics || (exports.Topics = Topics = {}));
