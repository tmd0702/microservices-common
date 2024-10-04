import { Topics } from './topics';

export interface CameraUpdatedEvent {
    topic: Topics.CameraUpdated;
    data: {
      id: string;
      name: string;
      location_id: string;
      ip_address: string;
    };
}
