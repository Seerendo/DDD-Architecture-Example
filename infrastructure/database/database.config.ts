import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "typescript.clcl2rhzoeva.us-east-1.rds.amazonaws.com",
    port: 3306,
    username: "admin",
    password: "Roannamo123_",
    database: "typescript",
    //Synchronize desactivar en producción
    synchronize: true,
    logging: true,
    entities: [],
});