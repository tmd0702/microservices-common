import { CustomError } from './custom-error';
export declare class InvalidTokenError extends CustomError {
    statusCode: number;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
