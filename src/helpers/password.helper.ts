import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "config";

export class authPassword {
  static async hash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(config.get<number>("saltRounds"));
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  static async verify(
    passwordToVerify: string,
    hashedPassword: string
  ): Promise<boolean> {
    const isPasswordValid = await bcrypt.compare(
      passwordToVerify,
      hashedPassword
    );
    return isPasswordValid;
  }
}

export class authToken {
  private static jwtSecretKey = config.get<string>("jwtSecretKey");
  static sign(payload: string) {
    const access_token = jwt.sign({ id: payload }, authToken.jwtSecretKey, {
      expiresIn: "24h",
    });
    return access_token;
  }

  static verify(token: string) {
    const decoded_token = jwt.verify(token, authToken.jwtSecretKey as string);
    return decoded_token;
  }
}
