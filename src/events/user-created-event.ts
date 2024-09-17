import { Subjects } from './subjects';
import { UserStatus } from './enums/user-status';

export interface UserCreatedEvent {
  subject: Subjects.UserCreated;
  data: {
    id: string;
    status: UserStatus
  };
}
