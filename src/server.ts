import cors from "cors";
import express from "express";
import helmet from "helmet";
import compression from "compression";
import dotenv from "dotenv";
import { register } from "tsconfig-paths";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const port = process.env.PORT;

const app = express();
register();

//Middleware
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable("x-powered-by");

//Use a prefix for all routes
const router = express.Router();
const apiPrefix = "/api";
app.use(apiPrefix, router);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
