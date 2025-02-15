
contactsRouter.get("/", getAllContacts);

![alt text](img/image.png)


contactsRouter.get("/:id", getOneContact);

![alt text](img/image-1.png)


contactsRouter.post("/", validateBody(contactSchema), createContact);

![alt text](image-3.png)


contactsRouter.put("/:id", validateBody(updateContactSchema), updateContact);

![alt text](image-4.png)


contactsRouter.delete("/:id", deleteContact);

![alt text](image-5.png)