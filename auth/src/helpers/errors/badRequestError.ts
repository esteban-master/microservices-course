import { CustomError } from "./customError";

export class BadRequestError extends CustomError {
  public readonly statusCode = 400;
  public reason;
  constructor(public message: string) {
    super('Bad request')
    this.reason = message
  }

  serializeError(){
    return [
      { message: this.reason }
    ]
  }
}