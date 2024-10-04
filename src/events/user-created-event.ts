import { Topics } from './topics';
import { UserStatus } from './enums/user-status';

export interface UserCreatedEvent {
    topic: Topics.UserCreated;
    data: {
      id: string;
      first_name?: string;
      last_name?: string;
      email?: string;
      phone_number?: string;
      status: UserStatus;
    }
}
