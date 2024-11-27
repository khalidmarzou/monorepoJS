const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController.cjs");

const delay = (duration) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

router.get("/contacts", async (req, res) => {
  await delay(2000);
  contactController.getAllContacts(req, res);
});

router.get("/contacts/:id", async (req, res) => {
  await delay(2000);
  contactController.getContactById(req, res);
});

router.put("/contacts/:id", async (req, res) => {
  await delay(2000);
  contactController.updateContact(req, res);
});

router.post("/contacts", contactController.createContact);

router.delete("/contacts/:id", contactController.deleteContact);

module.exports = router;
