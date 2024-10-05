import { Topics } from './topics';
import { DepartmentStatus } from "./enums/department-status";
export interface DepartmentCreatedEvent {
    topic: Topics.DepartmentCreated;
    data: {
        id: string;
        name: string;
        status: DepartmentStatus;
    };
}
