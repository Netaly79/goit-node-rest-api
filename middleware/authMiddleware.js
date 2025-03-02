import jwt from "jsonwebtoken";
import User from "../db/models/User.js";

const SECRET_KEY = process.env.JWT_SECRET;

export async function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, SECRET_KEY);
    const user = await User.findOne({ where: { id: decoded.id } });

    if (!user || user.token !== token) {
      return res.status(402).json({ message: "Not authorized" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error);
    return res.status(403).json({ message: "Not authorized" });
  }
}
