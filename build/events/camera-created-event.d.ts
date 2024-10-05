import { Topics } from './topics';
export interface CameraCreatedEvent {
    topic: Topics.CameraCreated;
    data: {
        id: string;
        name: string;
        location_id: string;
        ip_address: string;
    };
}
