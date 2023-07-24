import { Request, Response, NextFunction } from "express";

//@desc {Describe service}
//@route {METHOD} routeLink
//@access Public
export const resetUserPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error: any) {
    next(error);
  }
};
