import { Topics } from './topics';
import { StoreStatus } from './enums/store-status';

export interface StoreCreatedEvent {
    topic: Topics.UserCreated;
    data: {
      id: string;
      name: string;
      contactNumber: string;
      status: StoreStatus;
    };
}
