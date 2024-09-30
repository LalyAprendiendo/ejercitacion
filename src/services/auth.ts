import { NextFunction, Request, Response } from "express";
import UsersService from "./users";
import { v4 as uuidv4 } from "uuid";
import AuthModel from "../models/auth";
import createHash from "../utils/create-hash";
import { registerValidator } from "../schemas/register";
import { loginValidator } from "../schemas/login";

class AuthService {
  static async register(data: {
    name: string;
    email: string;
    password: string;
  }) {
    try {
      const result = registerValidator(data);
      if (!result.success) throw new Error("Datos incorrectos");

      const userId = await UsersService.create({
        name: data.name,
        email: data.email,
      });
      const authDb = await AuthModel.read();
      const token = createHash(uuidv4());
      authDb.auth.push({
        id: uuidv4(),
        userId: userId,
        password: createHash(data.password),
        token: token,
      });
      AuthModel.write(authDb);
      return token;
    } catch (error) {
      throw error;
    }
  }

  static async login(data: { email; password }) {
    try {
      const result = loginValidator(data);
      if (!result.success) throw new Error("Datos incorrectos");
      
      const user = await UsersService.getByEmail(data.email);
      const userAuth = await AuthService.getByUserId(user.id);

      if (userAuth.password != createHash(data.password)) {
        throw new Error("Usuario no encontrado");
      }
      return userAuth.token;
    } catch (error) {
      throw error;
    }
  }
  static async getByUserId(userId) {
    try {
      const db = await AuthModel.read();
      const user = db.auth.find((user) => user.userId == userId);
      if (!user) {
        throw new Error("Usuario no encontrado");
      }
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;