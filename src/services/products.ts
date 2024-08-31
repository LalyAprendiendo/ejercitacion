import { v4 as uuidv4 } from "uuid";
import ProductsModel from "../models/products";

class ProductsService {
  static async getAllProducts(where) {
    try {
      const { products } = await ProductsModel.read();
      if (!where.description) return products;
      const productsFiltered = products.filter((product) =>
        product.description.includes(where.description)
      );
      return productsFiltered;
    } catch (error) {
      throw error;
    }
  }

  static async create(product: { description: string; sellPrice: number }) {
    try {
      const db = await ProductsModel.read();

      const id = uuidv4();
      const { description, sellPrice } = product;

      const newProduct = {
        id: id,
        description: description,
        sellPrice: sellPrice,
      };
      db.products.push(newProduct);

      await ProductsModel.write(db);

      return newProduct;
    } catch (error) {
      throw error;
    }
  }

  static async updateById(
    id: string,
    data: { description: string; sellPrice: number }
  ) {
    try {
      const db = await ProductsModel.read();

      let products = db.products.map((product) => {
        if(product.id == id){ return {...product,...data}}
        else return product
      });

      // if (!product) {
      //   const error = new Error("Producto no encontrado");
      //   error["statusCode"] = 404;

      //   throw error;
      // }

      db.products = products

      await ProductsModel.write(db);
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(id: string) {
    try {
      const db = await ProductsModel.read();
      const products = db.products.filter((product) => product.id != id);

      if (db.products.length == products.length) {
        const error = new Error("Producto no encontrado");
        error["statusCode"] = 404;

        throw error;
      }

      db.products = products;

      await ProductsModel.write(db);
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: string) {
    try {
      const products = await ProductsService.getAllProducts({});

      const product = products.find((product) => product.id == id);
      if (!product) {
        const error = new Error("Producto no encontrado");
        error["statusCode"] = 404;

        throw error;
      }

      return product;
    } catch (error) {
      throw error;
    }
  }
}

export default ProductsService;