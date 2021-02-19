import { ValidationError } from 'joi';
import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(private error: ValidationError) {
    super('Invalid request parameters');

    // Required to extend built in Error class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.error.details.map((err) => {
      return { message: err.message, field: String(err.path) };
    });
  }
}
