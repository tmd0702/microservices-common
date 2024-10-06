import { Topics } from './topics';

export interface LocationCreatedEvent {
    topic: Topics.LocationCreated;
    data: {
      id: string;
      name: string;
      address: string;
      floor_number: string;
      zone_name: string;
    };
}
