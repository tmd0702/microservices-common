import { Topics } from './topics';

export interface ItemCreatedEvent {
    topic: Topics.ItemCreated;
    data: {
      id: string;
      name: string;
      price: number;
      stock: number;
    };
}
