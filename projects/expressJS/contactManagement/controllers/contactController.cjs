const contacts = require("../data/contacts.json") || [];
const { writeToFile, getNextId } = require("../utils/fileUtils.cjs");

const filePath = "./data/contacts.json";

// all contacts
const getAllContacts = (req, res) => {
  console.log("all contacts fetched with successfully");
  res.status(200).json(contacts);
};

// specific contact
const getContactById = (req, res) => {
  const id = parseInt(req.params.id);
  const contact = contacts.find((c) => c.id === id);
  if (!contact) {
    return res.status(404).json({ error: "Contact not found" });
  }
  console.log(`contact id: ${id} fetched with successfully`);
  res.status(200).json(contact);
};

// new contact
const createContact = (req, res) => {
  const { name, email, phone, city } = req.body;
  if (!name || !email || !phone || !city) {
    return res.status(400).json({ error: "Name, email, city and phone are required" });
  }

  const newContact = {
    id: getNextId(contacts),
    name,
    email,
    phone,
    city,
  };

  contacts.push(newContact);
  writeToFile(filePath, contacts, res);
  console.log(`you add the contact id: ${newContact.id} with success`);
};

// Update a contact
const updateContact = (req, res) => {
  const id = parseInt(req.params.id);
  const contactIndex = contacts.findIndex((c) => c.id === id);

  if (contactIndex === -1) {
    return res.status(404).json({ error: "Contact not found" });
  }

  const { name, email, phone, city } = req.body;
  if (!name || !email || !phone || !city) {
    return res.status(400).json({ error: "Name, email,city and phone are required" });
  }

  contacts[contactIndex] = {
    id,
    name,
    email,
    phone,
    city,
  };

  writeToFile(filePath, contacts, res);
  console.log(`you update the contact id: ${id} with success`);
};

// Delete a contact
const deleteContact = (req, res) => {
  const id = parseInt(req.params.id);
  const contactIndex = contacts.findIndex((c) => c.id === id);

  if (contactIndex === -1) {
    return res.status(404).json({ error: "Contact not found" });
  }

  contacts.splice(contactIndex, 1);
  writeToFile(filePath, contacts, res);
  console.log(`you delete the contact id: ${id} with success`);
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
