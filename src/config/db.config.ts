//install mongoose "npm install mongoose" and uncomment the below code
/* import mongoose from "mongoose";

const mongo_url = process.env.MONGO_URL;

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(`${mongo_url}`);
    console.log("Successfully connected to Database");
  } catch (error: any) {
    console.error("Error connecting to Database:", error);
  }
};

*/
