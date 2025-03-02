import express from "express";
import { register, login, logout, current } from "../controllers/userControllers.js";
import validateBody from "../helpers/validateBody.js";
import { registerSchema } from "../schemas/userSchemas.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/register", validateBody(registerSchema), register);
userRouter.post("/login", validateBody(registerSchema), login);
userRouter.post("/logout", authMiddleware, logout);
userRouter.get("/current", authMiddleware, current);

export default userRouter;
