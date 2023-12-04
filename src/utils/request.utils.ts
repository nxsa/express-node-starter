import { Request } from "express";

//Extending the Request interface with the user who made the request
export interface IUserRequest extends Request {
  user?: { userId: string };
}
