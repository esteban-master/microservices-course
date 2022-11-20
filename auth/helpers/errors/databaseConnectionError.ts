import { CustomError } from "./customError";

export class DatabaseConnectionError extends CustomError {
  public readonly statusCode = 500;

  constructor() {
    super()
  }

  serializeError(){
    return [
      { message: "Error connecting to database" }
    ]
  }
}