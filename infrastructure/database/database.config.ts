import { DataSource } from "typeorm";
import { User } from "../model/user/user.schema";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "testing.clcl2rhzoeva.us-east-1.rds.amazonaws.com",
    port: 3306,
    username: "admin",
    password: "Roannamo123_",
    database: "typescript",
    //Synchronize desactivar en producción
    synchronize: true,
    logging: true,
    entities: [User],
});