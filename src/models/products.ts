import { writeFile, readFile } from "jsonfile";

class ProductsModel {
  static async write(data) {
    try {
      await writeFile("./src/database/products.json", data);
      return true;
    } catch (error) {
      throw error;
    }
  }

  static async read() {
    try {
      const db = await readFile("./src/database/products.json");
      return db;
    } catch (error) {
      throw error;
    }
  }
}

export default ProductsModel;