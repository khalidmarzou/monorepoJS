import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import ErrorContainer from "./ErrorContainer";

const fetchContact = async (contactID) => {
  const response = await axios.get(`http://localhost:3000/contacts/${contactID}`);
  return response.data;
};

const deleteContact = async (contactID) => {
  const response = await axios.delete(`http://localhost:3000/contacts/${contactID}`);
  return response.data;
};

export default function Contact() {
  const { contactID } = useParams();
  const navigate = useNavigate();

  const {
    data: contact,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["contact", contactID],
    queryFn: () => fetchContact(contactID),
  });

  const mutation = useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      navigate("/contacts");
    },
    onError: () => {
      alert("Failed to remove contact.");
    },
  });

  const handleRemove = () => {
    const confirmed = window.confirm("Are you sure you want to remove this contact?");
    if (confirmed) {
      mutation.mutate(contactID);
    }
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorContainer />;

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8 p-6">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">{contact.name}</h2>
        <div className="flex space-x-2 mb-4">
          <span className="px-2 py-1 text-sm text-white bg-blue-500 rounded-full">{contact.city}</span>
        </div>
      </div>
      <p className="text-gray-700">
        <span className="font-medium">Phone:</span> {contact.phone}
      </p>
      <p className="text-gray-700">
        <span className="font-medium">Email:</span> {contact.email}
      </p>

      <div className="mt-6 flex justify-between">
        <button
          onClick={() => navigate(`/contacts/${contactID}/edit`)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Update
        </button>
        <button onClick={handleRemove} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
          Remove
        </button>
      </div>
    </div>
  );
}
