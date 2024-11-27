import React, { useState } from "react";

export default function ProductForm({ setProduct }) {
  const [product_copy, setProduct_copy] = useState({
    reference: "",
    name: "",
    category: "",
    description: "",
    price: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setProduct_copy({ ...product_copy, [name]: files[0] });
    } else {
      setProduct_copy({ ...product_copy, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProduct({ ...product_copy });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Gestion des produits</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Reference */}
        <div className="flex flex-col">
          <label htmlFor="reference" className="text-gray-700 font-medium">
            Référence :
          </label>
          <input
            type="text"
            id="reference"
            name="reference"
            value={product_copy.reference}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Ex: X0001F"
            required
          />
        </div>

        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 font-medium">
            Nom Produit :
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={product_copy.name}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Ex: Nutella"
            required
          />
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label htmlFor="category" className="text-gray-700 font-medium">
            Catégorie Produit :
          </label>
          <select
            id="category"
            name="category"
            value={product_copy.category}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          >
            <option value="">Sélectionnez une catégorie</option>
            <option value="Petit déjeuner">Petit déjeuner</option>
            <option value="Déjeuner">Déjeuner</option>
            <option value="Dîner">Dîner</option>
          </select>
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label htmlFor="description" className="text-gray-700 font-medium">
            Description :
          </label>
          <textarea
            id="description"
            name="description"
            value={product_copy.description}
            onChange={handleInputChange}
            rows="4"
            className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Ex: Pâte à tartiner aux noisettes..."
            required
          ></textarea>
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <label htmlFor="price" className="text-gray-700 font-medium">
            Prix :
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={product_copy.price}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Ex: 70"
            required
          />
        </div>

        {/* Image */}
        <div className="flex flex-col">
          <label htmlFor="image" className="text-gray-700 font-medium">
            Image Produit :
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            accept="image/*"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          Valider
        </button>
      </form>
    </div>
  );
}
