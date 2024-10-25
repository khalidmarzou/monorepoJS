import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getExpertById } from "../services/expertService";

const ExpertDetails = () => {
  const { id } = useParams();
  const [expert, setExpert] = useState(null);

  useEffect(() => {
    const fetchExpert = async () => {
      const data = await getExpertById(id);
      setExpert(data);
    };

    fetchExpert();
  }, [id]);

  if (!expert) return <div className="text-center">Loading...</div>;

  const totalCost = expert.evenements.reduce((acc, event) => {
    return acc + event.cout_journalier * event.duree;
  }, 0);

  return (
    <div className="w-full mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-4">Expert Details</h2>
      <p className="mb-2">
        <strong>Name:</strong> {expert.nom_complet}
      </p>
      <div className="flex mb-6">
        <Link to={`/expert/${id}/event/add`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
          Add Event
        </Link>
        <Link to={`/expert/${id}/delete`} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Delete Expert
        </Link>
      </div>
      <h3 className="text-2xl font-semibold mb-4">Events</h3>
      {expert.evenements.length > 0 ? (
        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left text-gray-700">Theme</th>
              <th className="py-2 px-4 border-b text-left text-gray-700">Start Date</th>
              <th className="py-2 px-4 border-b text-left text-gray-700">End Date</th>
              <th className="py-2 px-4 border-b text-left text-gray-700">Description</th>
              <th className="py-2 px-4 border-b text-left text-gray-700">Daily Cost</th>
              <th className="py-2 px-4 border-b text-left text-gray-700">Duration (days)</th>
              <th className="py-2 px-4 border-b text-left text-gray-700">Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {expert.evenements.map((event) => (
              <tr key={event.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-2 px-4 border-b">{event.theme}</td>
                <td className="py-2 px-4 border-b">{new Date(event.date_debut).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">{new Date(event.date_fin).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">{event.description}</td>
                <td className="py-2 px-4 border-b">${event.cout_journalier}</td>
                <td className="py-2 px-4 border-b">{event.duree}</td>
                <td className="py-2 px-4 border-b">${event.cout_journalier * event.duree}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-200 font-semibold">
              <td colSpan="6" className="py-2 px-4 border-b text-right">
                Total Cost:
              </td>
              <td className="py-2 px-4 border-b">${totalCost}</td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <p>No events available for this expert.</p>
      )}
    </div>
  );
};

export default ExpertDetails;
