import { Topics } from './topics';
export interface EmployeeUpdatedEvent {
    topic: Topics.EmployeeUpdated;
    data: {
        id: string;
        employee_code: string;
        first_name: string;
        last_name: string;
        position: string;
        phone_number: string;
        department_id?: string;
        email: string;
    };
}
