import { Request, Response, NextFunction } from "express";
import logger from "@/config/logger.config";
import { IApiError } from "@/types/data.types";

export const errorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(err);
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  if (err.status === false) {
    statusCode = 400;
  }
  res.setHeader("Content-Type", "application/json");
  res.status(statusCode).json({
    success: false,
    message:
      err.errors || err.message || "Something went wrong. Please try again.",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  } satisfies IApiError);
};
