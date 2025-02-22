import {listContacts, getContactById, removeContact, addContact, updateCurrentContact, updateStatusContact} from "../services/contactsServices.js";

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await listContacts();
    return res.status(200).json(contacts);
  } catch (error) {
  updateFavoriteContacts,FavoriteContacts,ole.error("Error fetching contacts:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getOneContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await getContactById(id);
    if (contact) {
      return res.status(200).json(contact);
    } else {
      return res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    console.error("Error fetching contact by ID:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const removedContact = await removeContact(id);
    if (removedContact) {
      return res.status(200).json(removedContact);
    } else {
      return res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    console.error("Error deleting contact:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const createContact = async (req, res) => {
  try {
    const newContact = await addContact(
      req.body.name,
      req.body.email,
      req.body.phone
    );
    return res.status(201).json(newContact);
  } catch (error) {
    console.error("Error creating contact:", error);
    return res.status(500).json({ message: "Internal server error" });
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
      return res.status(200).json(updatedContact);
    } else {
      return res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    console.error("Error updating contact:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export async function updateFavorite(req, res) {
  const { id } = req.params;
  const { favorite } = req.body;

  const updatedContact = await updateStatusContact(id, { favorite });

  if (!updatedContact) {
    return res.status(404).json({ message: "Not found" });
  }

  return res.status(200).json(updatedContact);
}
