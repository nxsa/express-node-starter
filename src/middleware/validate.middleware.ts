import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import logger from "@/utils/logger.utils";

const validate =
  (schema: yup.ObjectSchema<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body as object;
    try {
      schema.validateSync(payload, {
        abortEarly: false,
      });
      next();
    } catch (err: any) {
      logger.error(err.errors);
      res.status(400).json({ success: false, message: err.errors });
    }
  };

export default validate;
