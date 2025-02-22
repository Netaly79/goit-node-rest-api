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

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", getOneContact);

contactsRouter.delete("/:id", deleteContact);

contactsRouter.post("/", validateBody(contactSchema), createContact);

contactsRouter.put("/:id", validateBody(updateContactSchema), updateContact);

contactsRouter.put("/:id/favorite", validateBody(updateStatusSchema), updateFavorite);

export default contactsRouter;
