import { Topics } from './topics';
export interface LocationUpdatedEvent {
    topic: Topics.LocationUpdated;
    data: {
        id: string;
        name: string;
        address: string;
        floor_number: number;
        zone_name: string;
    };
}
