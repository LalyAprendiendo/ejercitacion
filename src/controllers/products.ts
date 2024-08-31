import { NextFunction, Request, Response } from "express";

import ProductsService from "../services/products";

class ProductsController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      // GET ==> /products?name=tornillo

      // req.query == { name:"tornillo" }
      const data = await ProductsService.getAllProducts;

      res.status(200).json({ data: data })
    } catch (error) {
      next(error);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await ProductsService.getById(req.params.id);

      res.status(200).json({ data: data })
    } catch (error) {
      next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await ProductsService.create(req.body);

      res.status(201).json({ data: data })
    } catch (error) {
      next(error);
    }
  }

  static async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      await ProductsService.updateById(req.params.id, req.body);

      res.status(200).json({ message: "Producto modificado con exito" })
    } catch (error) {
      next(error);
    }
  }

  static async deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      await ProductsService.deleteById(req.params.id);

      res.status(200).json({ message: "Producto eliminado con exito" })
    } catch (error) {
      next(error);
    }
  }
}

export default ProductsController;