import { NextFunction, Request, Response } from "express";
import { CustomError } from "../helpers/errors/customError";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
  if(err instanceof CustomError) {
    return res.status(err.statusCode).json({
      errors: err.serializeError()
    })
  }

  res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
}