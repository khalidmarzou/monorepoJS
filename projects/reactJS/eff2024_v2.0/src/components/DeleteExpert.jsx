import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteExpert } from "../services/expertService";

const DeleteExpert = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteExpert(id);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto text-center p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-red-600">Delete Expert</h2>
      <p className="mb-4 text-gray-700">Are you sure you want to delete this expert? This action cannot be undone.</p>
      <div className="flex justify-center">
        <button onClick={handleDelete} className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition duration-300">
          Yes, Delete
        </button>
        <button onClick={() => navigate(-1)} className="ml-4 bg-gray-300 text-black px-6 py-2 rounded hover:bg-gray-400 transition duration-300">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteExpert;
