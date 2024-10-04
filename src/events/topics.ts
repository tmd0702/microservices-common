export enum Topics {
    // User
    UserCreated = 'user.created',
    UserUpdated = 'user.updated',

    // Auth
    EmailVerificationNeeded = 'verification.email',
    EmailVerificationCompleted = 'verification.email.complete',
    SMSVerificationNeeded = 'verification.sms',
    SMSVerificationCompleted = 'verification.sms.complete',

    // Store
    StoreCreated = 'store.created',
    StoreUpdated = 'store.updated',

    // Item
    ItemCreated = 'item.created',
    ItemUpdated = 'item.updated',

    // Payment
    PaymentCreated = 'payment.created',

    // Order
    OrderCreated = 'order.created',
    OrderCancelled = 'order.cancelled',

    // Department
    DepartmentCreated = 'department.created',
    DepartmentUpdated = 'department.updated',

    // Employee
    EmployeeCreated = 'employee.created',
    EmployeeUpdated = 'employee.updated',

    // Camera
    CameraCreated = 'camera.created',
    CameraUpdated = 'camera.updated',
    LocationCreated = 'location.created',
    LocationUpdated = 'location.updated'
}
