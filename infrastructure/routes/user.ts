import { Router } from "express";
import { UserORMRepository } from "../repositories/user/userORM.repository";
import { UserUseCase } from "../../application/useCase/user/userUseCase";
import { UserController } from "../controllers/user/user.ctrl";

const subRouter = Router();
//Inicializar Repositorio
const userRepo = new UserORMRepository();
//Inicializar casos de uso
const userUseCase = new UserUseCase(userRepo);
//Inicializar controller
const userCtrl = new UserController(userUseCase);

subRouter.get("/", (req, res) => {
  console.log("Hola Mundo");
});

subRouter.get("/getAllUsers", userCtrl.getAllUserCtrl);

export { subRouter };
