/* import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "config";
import prisma from "@/config/db.config";
import {
  hashPassword,
  generateToken,
  verifyPassword,
} from "@/resource/auth.resource";
import { IApiResponse } from "@repo/shared";

// @desc   Register a new user
// @route  POST /user/create
// @access Public
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    //Check if user already exists and return error if true
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (user) {
      res.status(400);
      throw new Error("The user already exists");
    }
    //Hash password
    const hashedPassword = await hashPassword(password);
    //Create user and verification token and save in db
    const token = generateToken();
    const newUser = await prisma.user.create({
      data: {
        email,
        token,
        password: hashedPassword,
      },
    });
    //TODO: send email with token to user
    //Return user and success message
    res.status(201).json({
      message: "User created successfully",
      data: {
        email: newUser.email,
        token: newUser.token!,
      },
      success: true,
    } satisfies IApiResponse<{ email: string; token: string }>);
  } catch (err: any) {
    next(err);
  }
};
 */
