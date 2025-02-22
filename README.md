
contactsRouter.get("/", getAllContacts);

![alt text](img/image.png)


contactsRouter.get("/:id", getOneContact);

![alt text](img/image-1.png)


contactsRouter.post("/", validateBody(contactSchema), createContact);

![alt text](img/image-3.png)


contactsRouter.put("/:id", validateBody(updateContactSchema), updateContact);

![alt text](img/image-4.png)


contactsRouter.delete("/:id", deleteContact);

![alt text](img/image-5.png)


contactsRouter.put("/:id/favorite", validateBody(updateStatusSchema), updateFavorite);

![alt text](img/image-7.png)


DataBase:

![alt text](img/image-6.png)