import { DataSource } from "typeorm";
import { UserORM } from "../model/user/user.schema";

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export const AppDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: Number(DB_PORT) || 3306,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  //Synchronize desactivar en producción
  synchronize: false,
  logging: true,
  entities: [UserORM],
});
