import { CustomError } from "./customError";

export class DatabaseConnectionError extends CustomError {
  public readonly statusCode = 500;

  constructor() {
    super('Error connecting to database')
  }

  serializeError(){
    return [
      { message: "Error connecting to database" }
    ]
  }
}