import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addEventToExpert } from "../services/expertService";

const AddEvent = () => {
  const { id } = useParams();
  const [eventDetails, setEventDetails] = useState({
    theme: "",
    dateDebut: "",
    dateFin: "",
    description: "",
    coutJournalier: "",
    duree: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEventToExpert(id, {
      ...eventDetails,
      cout_journalier: Number(eventDetails.coutJournalier),
      duree: Number(eventDetails.duree),
    });
    navigate(`/expert/${id}`);
  };

  return (
    <div className="px-4 py-2 h-full flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold text-center">Add Event to Expert</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-1/2">
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="theme">
              Event Theme
            </label>
            <input
              type="text"
              id="theme"
              name="theme"
              value={eventDetails.theme}
              onChange={handleChange}
              placeholder="Event Theme"
              required
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateDebut">
              Start Date
            </label>
            <input
              type="date"
              id="dateDebut"
              name="dateDebut"
              value={eventDetails.dateDebut}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateFin">
              End Date
            </label>
            <input
              type="date"
              id="dateFin"
              name="dateFin"
              value={eventDetails.dateFin}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={eventDetails.description}
              onChange={handleChange}
              placeholder="Event Description"
              required
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coutJournalier">
              Daily Cost
            </label>
            <input
              type="number"
              id="coutJournalier"
              name="coutJournalier"
              value={eventDetails.coutJournalier}
              onChange={handleChange}
              placeholder="Daily Cost"
              required
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duree">
              Duration (days)
            </label>
            <input
              type="number"
              id="duree"
              name="duree"
              value={eventDetails.duree}
              onChange={handleChange}
              placeholder="Duration in Days"
              required
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full mt-6 transition duration-300">
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
