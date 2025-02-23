import User from "../db/models/User.js";

export async function listContacts() {
  try {
    return await User.findAll();
  } catch (error) {
    return [];
  }
}

export async function getContactById(contactId) {
  try {
    return User.findByPk(contactId);
  } catch (error) {
    return null;
  }
}

export async function removeContact(contactId) {
  try {
    const contact = await User.findByPk(contactId);
    if (!contact) return null;
    await contact.destroy();
    return contact;
  } catch (error) {
    return null;
  }
}

export async function addContact(name, email, phone) {
  try {
    return await User.create({ name, email, phone });
  } catch (error) {
    return null;
  }
}

export async function updateCurrentContact(id, body) {
  try {
    const contact = await User.findByPk(id);
    if (!contact) {
      return null;
    }
    await contact.update(body);
    return contact;
  } catch (error) {
    return null;
  }
}

export async function updateStatusContact(id, body) {
  try {
    const contact = await User.findByPk(id);
    if (!contact) {
      return null;
    }
    await contact.update(body);
    return contact;
  } catch (error) {
    return null;
  }
}

export async function updateFavorite(req, res) {
  const { id } = req.params;
  const { favorite } = req.body;

  const updatedContact = await updateStatusContact(id, { favorite });

  if (!updatedContact) {
    return res.status(404).json({ message: "Not found" });
  }

  res.status(200).json(updatedContact);
}
