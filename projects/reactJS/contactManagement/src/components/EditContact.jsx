import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import ErrorContainer from "./ErrorContainer";

const EditContact = () => {
  const { contactID } = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  const { data, isLoading, error } = useQuery({
    queryKey: ["contact", contactID],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3000/contacts/${contactID}`);
      return response.data;
    },
  });

  useEffect(() => {
    if (data) {
      setContact({
        name: data.name || "",
        phone: data.phone || "",
        email: data.email || "",
        city: data.city || "",
      });
    }
  }, [data]);

  const mutation = useMutation({
    mutationFn: async (updatedContact) => {
      await axios.put(`http://localhost:3000/contacts/${contactID}`, updatedContact);
    },
    onSuccess: () => {
      console.log("Contact updated successfully");
      navigate("/contacts");
    },
    onError: (error) => {
      console.error("Error updating contact:", error);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!contact.name) newErrors.name = "Name is required";
    if (!contact.phone) newErrors.phone = "Phone is required";
    if (!contact.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(contact.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!contact.city) newErrors.city = "City is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      mutation.mutate(contact);
    }
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorContainer />;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Edit Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={contact.name}
              onChange={handleChange}
              className={`mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${
                errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="Enter name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="phone">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={contact.phone}
              onChange={handleChange}
              className={`mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${
                errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="Enter phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={contact.email}
              onChange={handleChange}
              className={`mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="Enter email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="city">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              value={contact.city}
              onChange={handleChange}
              className={`mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${
                errors.city ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="Enter city"
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200 ${
              mutation.isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Updating..." : "Update Contact"}
          </button>
          {mutation.isError && <p className="text-red-500 text-sm">Error updating contact</p>}
        </form>
      </div>
    </div>
  );
};

export default EditContact;
