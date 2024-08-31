import { Request, Response, NextFunction } from "express";
import AuthModel from "../models/auth";

async function checkToken(req: Request, resp: Response, next: NextFunction) {
  const token = req.query.token;
  if (!token)
    return resp.status(400).json({ message: "El token es obligatorio" });
  const authDb = await AuthModel.read();
  const user = authDb.auth.find((auth) => auth.token == token);
  if (!user) return resp.status(401).json({ message: "Token invalido " });
  next();
}
export default checkToken;
