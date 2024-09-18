import { Topics } from './topics';
import { UserStatus } from './enums/user-status';

export interface UserUpdatedEvent {
    topic: Topics.UserUpdated;
    data: {
        id: string;
        status: UserStatus
    };
}
