import { CustomError } from "./customError";

export class NotAuthorizedError extends CustomError {
  public readonly statusCode = 401;

  constructor() {
    super('Not authorized')
  }

  serializeError(){
    return [
      { message: 'Not authorized' }
    ]
  }
}