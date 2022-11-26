import { NextFunction, Request, Response } from "express";
import { NotAuthorizedError } from "../helpers/errors/noAuthorizedError";

export const requireAuth = async (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new NotAuthorizedError() 
  }

  next();
};