import { Router } from "express";
import jsonfile from "jsonfile";
import { UserController } from "../controllers/users";

const usersRouter = Router();

usersRouter.get("/", UserController.getAllUsers);

export { usersRouter };
