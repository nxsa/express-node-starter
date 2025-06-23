import dotenv from "dotenv";
dotenv.config({ path: ".env" });

export default {
  port: process.env.PORT as unknown as number,
  db_url: process.env.DB_URL as string,
  saltRounds: 11 as number,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET as string,
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET as string,
};
