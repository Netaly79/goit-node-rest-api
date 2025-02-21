import {listContacts, getContactById, removeContact, addContact, updateCurrentContact} from "../services/contactsServices.js";

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await listContacts();
    res.status(200).json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getOneContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await getContactById(id);
    if (contact) {
      res.status(200).json(contact);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    console.error("Error fetching contact by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const removedContact = await removeContact(id);
    if (removedContact) {
      res.status(200).json(removedContact);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createContact = async (req, res) => {
  try {
    const newContact = await addContact(
      req.body.name,
      req.body.email,
      req.body.phone
    );
    res.status(201).json(newContact);
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateContact = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Body must have at least one field" });
    }
    
    const { id } = req.params;
    const updatedContact = await updateCurrentContact(id, req.body);
    if (updatedContact) {
      res.status(200).json(updatedContact);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    console.error("Error updating contact:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
