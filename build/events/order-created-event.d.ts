import { Topics } from './topics';
import { OrderStatus } from "./enums/order-status";
export interface OrderCreatedEvent {
    topic: Topics.OrderCreated;
    data: {
        id: string;
        userId: string;
        status: OrderStatus;
        items: {
            id: string;
            name: string;
            price: number;
            quantity: number;
        }[];
    };
}
