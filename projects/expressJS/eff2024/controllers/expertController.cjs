const experts = require("../data/expertsData.json");
const { writeToFile, getNextId } = require("../utils/fileUtils.cjs");

// File path for experts data
const filePath = "./data/expertsData.json";

// Get all experts
const getAllExperts = (req, res) => {
  res.status(200).json(experts);
};

// Get a specific expert by ID
const getExpertById = (req, res) => {
  const id = parseInt(req.params.id);
  const expert = experts.find((e) => e.id === id);
  if (!expert) {
    return res.status(404).json({ error: "Expert not found" });
  }
  res.status(200).json(expert);
};

// Create a new expert
const createExpert = (req, res) => {
  const { nom_complet } = req.body;
  if (!nom_complet) {
    return res.status(400).json({ error: "nom_complet is required" });
  }

  const newExpert = {
    id: getNextId(experts),
    nom_complet,
    evenements: [],
  };

  experts.push(newExpert);
  writeToFile(filePath, experts, res);
};

// Add an event to an expert
const addEventToExpert = (req, res) => {
  const id = parseInt(req.params.id);
  const expert = experts.find((e) => e.id === id);

  if (!expert) {
    return res.status(404).json({ error: "Expert not found" });
  }

  const newEvent = { id: getNextId(expert.evenements), ...req.body };
  expert.evenements.push(newEvent);

  writeToFile(filePath, experts, res);
};

// Delete an event from an expert
const deleteEventFromExpert = (req, res) => {
  const { id, idEvent } = req.params;

  const expert = experts.find((e) => e.id === parseInt(id));
  if (!expert) {
    return res.status(404).json({ error: "Expert not found" });
  }

  expert.evenements = expert.evenements.filter((e) => e.id !== parseInt(idEvent));
  writeToFile(filePath, experts, res);
};

// Delete an expert
const deleteExpert = (req, res) => {
  const id = parseInt(req.params.id);
  const expertIndex = experts.findIndex((e) => e.id === id);

  if (expertIndex === -1) {
    return res.status(404).json({ error: "Expert not found" });
  }

  experts.splice(expertIndex, 1);
  writeToFile(filePath, experts, res);
};

module.exports = {
  getAllExperts,
  getExpertById,
  createExpert,
  addEventToExpert,
  deleteEventFromExpert,
  deleteExpert,
};
