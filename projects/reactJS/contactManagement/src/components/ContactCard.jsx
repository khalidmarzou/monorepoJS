import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const ContactCard = ({ contact, refetch }) => {
  const { id, name, phone } = contact;

  const mutation = useMutation({
    mutationFn: () => axios.delete(`http://localhost:3000/contacts/${id}`),
    onSuccess: () => {
      console.log(`Contact ${id} deleted successfully`);
      refetch();
    },
    onError: (error) => {
      alert("Failed to remove contact.");
    },
  });

  const handleRemove = () => {
    if (window.confirm("Are you sure you want to remove this contact?")) {
      mutation.mutate();
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 mt-2">
          <span className="font-medium">Phone:</span> {phone}
        </p>
        <div className="mt-4 flex space-x-2">
          <Link to={`/contacts/${id}`} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Details
          </Link>
          <Link to={`/contacts/${id}/edit`} className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
            Update
          </Link>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300" onClick={handleRemove}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
