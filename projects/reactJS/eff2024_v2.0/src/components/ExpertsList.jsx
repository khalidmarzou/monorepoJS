import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getAllExperts } from "../services/expertService";

const ExpertList = () => {
  const { data: experts = [], isLoading, isError } = useQuery("experts", getAllExperts);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> There was an error fetching the experts.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Experts List</h2>
      <ul className="space-y-4">
        {experts.map((expert) => (
          <li
            key={expert.id}
            className="bg-white shadow-md rounded-sm p-4 transition-transform transform hover:scale-105 flex justify-between w-full items-center"
          >
            <div className="flex justify-between items-center w-full">
              <span className="text-lg font-semibold text-gray-800">{expert.nom_complet}</span>
              <div className="flex space-x-3">
                <Link to={`/expert/${expert.id}`} className="text-blue-600 hover:text-blue-800 transition-colors flex items-center">
                  View Details
                </Link>
                <Link to={`/expert/${expert.id}/delete`} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Delete Expert
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpertList;
