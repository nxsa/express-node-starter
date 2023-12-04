import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export default {
  port: process.env.PORT as unknown as number,
  //dbUrl: process.env.DB_URL as string,
  saltRounds: 11 as number,
  jwtSecretKey: process.env.JWT_SECRET_KEY as string,
};
