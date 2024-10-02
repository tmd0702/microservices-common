import { Topics } from './topics';
export interface ItemUpdatedEvent {
    topic: Topics.ItemUpdated;
    data: {
        id: string;
        name: string;
        price: number;
        stock: number;
    };
}
