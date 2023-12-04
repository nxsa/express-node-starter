import "module-alias/register";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { errorHandler } from "./middleware/error.middleware";
import config from "config";
//import connectDb from "./utils/db.utils";
import logger from "./utils/logger.utils";
import router from "./routes";

const port = config.get<number>("port");

const app = express();
//connectDb.mongoDb();

//Middleware
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable("x-powered-by");

//Use a prefix for all routes
const apiPrefix = "/api/v1";
app.use(apiPrefix, router);

app.use(errorHandler);

app.listen(port, async () => {
  logger.info(`Server started on port ${port}`);
});
