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
    StoreUpdated = 'store.updated'
}
