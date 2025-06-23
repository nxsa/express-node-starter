import { Response } from "express";
import express from "express";
const router = express.Router();
//import { checkAuth } from "@/middleware/auth.middleware";
import validate from "@/middleware/validate.mw";
//import { createUser } from "@/services/auth.service";

router.get("/healthcheck", (res: Response) => {
  res.status(200).send("OK");
});

//router.post("/user/create", validate(regSchema), createUser);

export default router;
