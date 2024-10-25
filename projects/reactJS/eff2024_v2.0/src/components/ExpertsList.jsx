import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllExperts } from "../services/expertService";

const ExpertList = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    const fetchExperts = async () => {
      const data = await getAllExperts();
      setExperts(data);
    };

    fetchExperts();
  }, []);

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
