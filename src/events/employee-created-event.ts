import { Topics } from './topics';

export interface EmployeeCreatedEvent {
    topic: Topics.EmployeeCreated;
    data: {
      id: string;
      employee_code: string;
      first_name: string;
      last_name: string;
      position: string;
      phone_number: string;
      email: string;
    };
}
