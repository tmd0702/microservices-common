import { Topics } from './topics';
export interface EmailVerificationEvent {
    topic: Topics.EmailVerificationNeeded;
    data: {
        userId: string;
        fullName: string;
        email: string;
        otp: string;
    };
}
