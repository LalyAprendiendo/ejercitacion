import { writeFile, readFile } from "jsonfile";

class UsersModel {
  static async write(data) {
    try {
      await writeFile("./dist/database/users.json", data);
      return true;
    } catch (error) {
      throw error;
    }
  }

  static async read() {
    try {
      const db = await readFile("./dist/database/users.json");
      return db;
    } catch (error) {
      throw error;
    }
  }
}

export default UsersModel;