const express = require("express");
const router = express.Router();
const expertController = require("../controllers/expertController.cjs");

router.get("/experts", expertController.getAllExperts);
router.get("/expert/:id", expertController.getExpertById);
router.post("/experts/create", expertController.createExpert);
router.post("/expert/:id/event/add", expertController.addEventToExpert);
router.delete("/expert/:id/event/:idEvent/delete", expertController.deleteEventFromExpert);
router.delete("/expert/:id/delete", expertController.deleteExpert);

module.exports = router;
