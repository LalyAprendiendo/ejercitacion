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

  static async create(product) {
    try {
      await ProductsModel.write("parámetro");
    } catch (error) {
      throw error;
    }
  }

  static async update(id, data) {
    try {
      await ProductsModel.write("parámetro");
    } catch (error) {
      throw error;
    }
  }

  static async deleteProduct(id) {
    try {
      await ProductsModel.write("parámetro");
    } catch (error) {
      throw error;
    }
  }
}

export default ProductsService;
