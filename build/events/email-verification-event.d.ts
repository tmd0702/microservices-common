import { Topics } from './topics';
import { EmailStatus } from "./enums/email-status";
export interface EmailVerificationEvent {
    topic: Topics.EmailVerificationNeeded;
    data: {
        userId: string;
        fullName: string;
        email: string;
        otp: string;
        status?: EmailStatus;
    };
}
