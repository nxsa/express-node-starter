import { Request, Response } from "express";
import express from "express";
const router = express.Router();
import validate from "@/middleware/validate.middleware";
//import { createAccount, loginUser } from "./services/user.service";
//import { createAccountSchema, loginSchema } from "./schema/user.schema";

router.get("/healthcheck", (req: Request, res: Response) => {
  res.status(200).send("OK");
});

//User Routes
//router.post("/user/register", validate(createAccountSchema), createAccount);
//router.post("/user/login", validate(loginSchema), loginUser);

export default router;
