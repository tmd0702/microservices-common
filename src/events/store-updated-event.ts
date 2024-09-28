import { Topics } from './topics';
import { StoreStatus } from './enums/store-status';

export interface StoreUpdatedEvent {
    topic: Topics.StoreUpdated;
    data: {
      id: string;
      name: string;
      contactNumber: string;
      status: StoreStatus;
    };
}
