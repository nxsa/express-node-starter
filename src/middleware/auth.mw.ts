/* import { Request, Response, NextFunction } from "express";
import { IUserRequest } from "@/utils/req.utils";
import config from "config";
import jwt from "jsonwebtoken";
import prisma from "@/config/db.config";

export const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let access_token;
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res.status(401);
      throw new Error("Unauthorized. No token provided");
    }
    if (!authHeader.startsWith("Bearer ")) {
      res.status(401);
      throw new Error("Unauthorized. Invalid token format");
    }
    const accessTokenSecret = config.get<string>("accessTokenSecret");
    access_token = authHeader.split(" ")[1];
    const decoded_token: any = jwt.verify(access_token, accessTokenSecret);
    if (!decoded_token) {
      res.status(401);
      throw new Error("Unauthorized. Invalid token");
    }
    if (decoded_token.expiresIn * 1000 < Date.now()) {
      res.status(401);
      throw new Error("Unauthorized. Token has expired");
    }
    const [user, profile] = await Promise.all([
      prisma.user.findUnique({
        where: {
          id: decoded_token.id,
        },
      }),
      prisma.profile.findUnique({
        where: {
          userId: decoded_token.id,
        },
      }),
    ]);
    if (!user) {
      res.status(401);
      throw new Error("The user does not exist");
    }
    (req as IUserRequest).user = decoded_token.id;
    if (profile) {
      (req as IUserRequest).profile = profile.id;
    }
    next();
  } catch (err) {
    next(err);
  }
};
 */
