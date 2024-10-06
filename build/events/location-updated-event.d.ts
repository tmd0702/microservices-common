import { Topics } from './topics';
export interface LocationUpdatedEvent {
    topic: Topics.LocationUpdated;
    data: {
        id: string;
        name: string;
        address: string;
        floor_number: string;
        zone_name: string;
    };
}
