import cors from "cors";
import express from "express";
import helmet from "helmet";
import compression from "compression";
import dotenv from "dotenv";
import router from "@/routes";
import config from "config";
import logger from "@/config/logger.config";
import { errorHandler } from "@/middleware/error.mw";

dotenv.config({ path: `.env` });

const port = config.get<number>("port") || 8080;

const app = express();

//Middleware
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});
app.disable("x-powered-by");

//Use a prefix for all routes
const apiPrefix = "/api/v1";
app.use(apiPrefix, router);

app.use(errorHandler);

const startServer = async () => {
  try {
    app.listen(port, () => {
      logger.info(`Server started on port ${port}`);
    });
  } catch (err: any) {
    if (err.code === "EADDRINUSE") {
      logger.warn(`Port ${port} is in use, trying ${port + 1}`);
      app.listen(port + 1, () => {
        logger.info(`Server started on port ${port + 1}`);
      });
    } else {
      logger.error("Failed to start server:", err);
      process.exit(1);
    }
  }
};

startServer();
