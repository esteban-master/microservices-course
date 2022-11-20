export abstract class CustomError extends Error {
  abstract readonly statusCode: number;

  constructor() {
    super()
  }

  abstract serializeError(): { message: string, field?: string }[]
}
