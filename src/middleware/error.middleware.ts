import { Request, Response, NextFunction } from "express";

export const errorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = res.statusCode ? res.statusCode : 500;
  if (statusCode === 200) {
    statusCode = 401;
  }
  if (err.status === false) {
    statusCode = 400;
  }
  res.status(statusCode);
  res.json({
    message: err.errors || err.message || "Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
