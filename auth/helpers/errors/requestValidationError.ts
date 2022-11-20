import { ValidationError } from "express-validator";
import { CustomError } from "./customError";

export class RequestValidationError extends CustomError {
  public readonly statusCode = 400;
  constructor(private readonly errors: ValidationError[]) {
    super()
  }

  serializeError(){
    return this.errors.map(err => ({ message: err.msg, field: err.param }))
  }
}