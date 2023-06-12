import  jwt  from "jsonwebtoken";
import { JWT_key } from "../config/enviroment";

export const jwtService = {
  signToken: (payload: string | object | Buffer, expiration: string) => {
    return jwt.sign(payload, JWT_key, {
      expiresIn: expiration
    })
  },
  verifyToken: (token: string, callbackfn: jwt.VerifyCallback) => {
    jwt.verify(token, JWT_key, callbackfn)
  }
}