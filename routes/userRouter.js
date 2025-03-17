import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { register, login, logout, current, uploadAvatar, verifyUser, resendVerificationEmail } from "../controllers/userControllers.js";
import validateBody from "../helpers/validateBody.js";
import { registerSchema } from "../schemas/userSchemas.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const userRouter = express.Router();

const uploadDir = path.join(__dirname, "../temp");
const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${req.user.id}${ext}`);
  },
});

const upload = multer({ storage });

userRouter.post("/register", validateBody(registerSchema), register);
userRouter.post("/login", validateBody(registerSchema), login);
userRouter.post("/logout", authMiddleware, logout);
userRouter.get("/current", authMiddleware, current);
userRouter.patch("/avatars", authMiddleware, upload.single("avatar"), uploadAvatar);
userRouter.post("/verify", resendVerificationEmail);
userRouter.get('/verify/:verificationToken', verifyUser);

export default userRouter;
