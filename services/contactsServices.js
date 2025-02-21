import { readFile, writeFile } from "node:fs/promises";
import * as path from "node:path";

const contactsPath = path.resolve("db", "contacts.json");

export async function listContacts() {
  try {
    const data = await readFile(contactsPath, "utf-8");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error reading contacts:", error);
    return [];
  }
}

export async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const contact = contacts.find((c) => c.id === contactId);
    return contact || null;
  } catch (error) {
    console.error("Error getting contact by ID:", error);
    return null;
  }
}

export async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex((c) => c.id === contactId);
    if (index === -1) return null;
    const [removedContact] = contacts.splice(index, 1);
    await writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return removedContact;
  } catch (error) {
    console.error("Error removing contact:", error);
    return null;
  }
}

export async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact = {
      id: String(Date.now()),
      name,
      email,
      phone,
    };
    contacts.push(newContact);
    await writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    console.error("Error adding contact:", error);
    return null;
  }
}

export async function updateCurrentContact(id, body) {
  try {
    const contacts = await listContacts();
    const contactIndex = contacts.findIndex((contact) => contact.id === id);
    if (contactIndex === -1) {
      console.error("Contact not found.");
      return null;
    }
    const updatedContact = {
      ...contacts[contactIndex],
      ...body,
    };

    contacts[contactIndex] = updatedContact;

    await writeFile(contactsPath, JSON.stringify(contacts, null, 2));

    return updatedContact;
  } catch (error) {
    console.error("Error updating contact:", error);
    return null;
  }
}
