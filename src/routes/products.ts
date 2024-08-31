import { NextFunction, Request, Response, Router } from "express";
import ProductsController from "../controllers/products";

const productsRouter = Router();

productsRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  ProductsController.getAll(req, res, next);
});

productsRouter.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  ProductsController.getById(req, res, next);
});

productsRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
  ProductsController.create(req, res, next);
});

productsRouter.patch("/:id", (req: Request, res: Response, next: NextFunction) => {
  ProductsController.updateById(req, res, next);
});

productsRouter.delete(
  "/:id",
  (req: Request, res: Response, next: NextFunction) => {
    ProductsController.deleteById(req, res, next);
  }
);

export default productsRouter;