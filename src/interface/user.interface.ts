//import { ObjectId, Document } from "mongoose";

export interface IUser extends Document {
  //  _id: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  emailVerified: boolean;
  phone: string;
  password: string;
  token?: string;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  createdAt: Date;
  updatedAt: Date;
}
