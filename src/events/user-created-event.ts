import { Topics } from './topics';
import { UserStatus } from './enums/user-status';

export interface UserCreatedEvent {
    topic: Topics.UserCreated;
    data: {
      id: string;
      status: UserStatus
    };
}
