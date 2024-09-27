import { Topics } from './topics';
export interface SmsVerificationCompleteEvent {
    topic: Topics.SMSVerificationCompleted;
    data: {
        userId: string;
        fullName: string;
        otp: string;
        phoneNumber: string;
    };
}
