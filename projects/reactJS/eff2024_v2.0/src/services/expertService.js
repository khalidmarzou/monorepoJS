import axios from "axios";

const API_URL = "http://localhost:3000"; // Base URL for your Express API

// Get all experts
export const getAllExperts = async () => {
  try {
    const response = await axios.get(`${API_URL}/experts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching experts:", error);
    throw error;
  }
};

// Get a single expert by ID
export const getExpertById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/expert/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching expert:", error);
    throw error;
  }
};

// Create a new expert
export const createExpert = async (expertData) => {
  try {
    const response = await axios.post(`${API_URL}/experts/create`, expertData);
    return response.data;
  } catch (error) {
    console.error("Error creating expert:", error);
    throw error;
  }
};

// Add event to an expert
export const addEventToExpert = async (id, eventData) => {
  try {
    const response = await axios.post(`${API_URL}/expert/${id}/event/add`, eventData);
    return response.data;
  } catch (error) {
    console.error("Error adding event:", error);
    throw error;
  }
};

// Delete an event from an expert
export const deleteEventFromExpert = async (id, idEvent) => {
  try {
    const response = await axios.delete(`${API_URL}/expert/${id}/event/${idEvent}/delete`);
    return response.data;
  } catch (error) {
    console.error("Error deleting event:", error);
    throw error;
  }
};

// Delete an expert
export const deleteExpert = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/expert/${id}/delete`);
    return response.data;
  } catch (error) {
    console.error("Error deleting expert:", error);
    throw error;
  }
};
