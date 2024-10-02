import { Topics } from './topics';
import { EmailStatus } from "./enums/email-status";
export interface EmailVerificationCompleteEvent {
    topic: Topics.EmailVerificationCompleted;
    data: {
        userId: string;
        fullName: string;
        email: string;
        otp: string;
        status: EmailStatus;
    };
}
