import express from "express";
import {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateFavorite
} from "../controllers/contactsControllers.js";
import validateBody from "../helpers/validateBody.js";
import { contactSchema, updateContactSchema, updateStatusSchema } from "../schemas/contactsSchemas.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const contactsRouter = express.Router();

contactsRouter.get("/", authMiddleware, getAllContacts);

contactsRouter.get("/:id", authMiddleware, getOneContact);

contactsRouter.delete("/:id", authMiddleware, deleteContact);

contactsRouter.post("/", authMiddleware, validateBody(contactSchema), createContact);

contactsRouter.put("/:id", authMiddleware, validateBody(updateContactSchema), updateContact);

contactsRouter.patch("/:id/favorite", authMiddleware, validateBody(updateStatusSchema), updateFavorite);

export default contactsRouter;
