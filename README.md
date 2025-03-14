TASK 9:

![alt text](img/image14.png)

![alt text](img/image15.png)







TASK 7:


userRouter.post("/register", validateBody(registerSchema), register);

![alt text](img/image9.png)


userRouter.post("/login", validateBody(registerSchema), login);

![alt text](img/image10.png)


contactsRouter.get("/", authMiddleware, getAllContacts); // owner 3

![alt text](img/image11.png)



userRouter.get("/current", authMiddleware, current);


![alt text](img/image12.png)


userRouter.post("/logout", authMiddleware, logout);

![alt text](img/image13.png)








contactsRouter.get("/", getAllContacts);

![alt text](img/image9.png)


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