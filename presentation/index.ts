import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "../infrastructure/database/database.config";

async function main() {
  try {
    await AppDataSource.initialize();
    app.listen(3000, () => {
      console.log("Conectado a la base de datos");
      console.log("Server corriendo en el puerto", 3000);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
