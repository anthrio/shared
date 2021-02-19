import { ValidationError } from 'joi';
import { CustomError } from './custom-error';
export declare class RequestValidationError extends CustomError {
    private error;
    statusCode: number;
    constructor(error: ValidationError);
    serializeErrors(): {
        message: string;
        field: string;
    }[];
}
