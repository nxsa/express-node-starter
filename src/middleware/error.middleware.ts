import { Request, Response, NextFunction } from "express";
import logger from "@/utils/logger.utils";

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(error);
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    success: false,
    message: error.errors || error.message || "Server Error",
    stack: process.env.NODE_ENV === "production" ? null : error.stack,
  });
};
