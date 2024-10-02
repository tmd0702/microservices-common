import { Topics } from './topics';
import {DepartmentStatus} from "./enums/department-status";

export interface DepartmentUpdatedEvent {
    topic: Topics.DepartmentUpdated;
    data: {
        id: string;
        name: string;
        status: DepartmentStatus;
    };
}
