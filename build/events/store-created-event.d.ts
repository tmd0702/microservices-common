import { Topics } from './topics';
import { StoreStatus } from './enums/store-status';
export interface StoreCreatedEvent {
    topic: Topics.StoreCreated;
    data: {
        id: string;
        name: string;
        contactNumber: string;
        status: StoreStatus;
    };
}
