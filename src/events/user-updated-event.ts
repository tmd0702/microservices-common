import { Subjects } from './subjects';
import { UserStatus } from './enums/user-status';

export interface UserUpdatedEvent {
    subject: Subjects.UserUpdated;
    data: {
        id: string;
        status: UserStatus
    };
}
