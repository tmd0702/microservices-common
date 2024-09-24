import { Topics } from './topics';
export interface SMSVerificationEvent {
    topic: Topics.SMSVerificationNeeded;
    data: {
        userId: string;
        fullName: string;
        otp: string;
        phoneNumber: string;
    };
}
