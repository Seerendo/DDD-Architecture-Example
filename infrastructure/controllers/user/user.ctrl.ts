import { Request, Response } from "express";
import { UserUseCase } from "../../../application/useCase/user/userUseCase";

export class UserController {
    constructor(private userUseCase: UserUseCase) {
        this.getAllUserCtrl = this.getAllUserCtrl.bind(this);
    }

    public async getAllUserCtrl(req: Request, res: Response) {
        const user = await this.userUseCase.getAllUser();
        res.send(user);
    }
}