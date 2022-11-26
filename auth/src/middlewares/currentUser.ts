import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: { id: string; email: string }
    }
  }
}

export const currentuser = async (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next()
  }
  
  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as { id: string; email: string }
    req.user = payload;
  } catch (error) {
    next()
  }

  next();
};