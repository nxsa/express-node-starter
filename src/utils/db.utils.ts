import mongoose from "mongoose";
import config from "config";
import logger from "@/utils/logger.utils";

// class connectDb {
//   static async mongoDb() {
//     const dbUrl = config.get<string>("dbUrl");
//     try {
//       await mongoose.connect(dbUrl);
//       logger.info("Successfully connected to Database");
//     } catch (error: any) {
//       logger.error("Error connecting to database: ", error.message);
//       process.exit(1);
//     }
//   }
// }

// export default connectDb;
