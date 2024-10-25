// src/components/CreateExpert.js
import React, { useState } from "react";
import { createExpert } from "../services/expertService";
import { useNavigate } from "react-router-dom";

const CreateExpert = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createExpert({ name });
    navigate("/"); // Redirect to the experts list after creation
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Create Expert</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Expert Name"
          required
          className="border border-gray-300 rounded w-full py-2 px-3 mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateExpert;
