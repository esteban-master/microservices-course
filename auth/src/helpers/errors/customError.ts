export abstract class CustomError extends Error {
  abstract readonly statusCode: number;

  constructor(public message: string) {
    super(message)
  }

  abstract serializeError(): { message: string, field?: string }[]
}
