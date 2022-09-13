import { Router } from "express";
import UserController from "../controllers/User.controller";

const router = Router();
router.post("/create-user", UserController.createUser);
router.get("/all-users", UserController.getAllUsers);

export default router;
