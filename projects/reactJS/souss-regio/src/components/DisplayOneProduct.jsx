import React, { useState, useEffect } from "react";

export default function DisplayOneProduct({ product }) {
  const { reference, name, category, price, image } = product;
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (image && image instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setImagePreview(image);
    }
  }, [image]);

  return (
    <article className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6 mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Information Produit</h1>
      <ul className="space-y-4">
        <li className="flex items-center">
          <span className="font-semibold text-gray-600 w-40">Référence Produit:</span>
          <span className="text-gray-900">{reference}</span>
        </li>
        <li className="flex items-center">
          <span className="font-semibold text-gray-600 w-40">Nom:</span>
          <span className="text-gray-900">{name}</span>
        </li>
        <li className="flex items-center">
          <span className="font-semibold text-gray-600 w-40">Catégorie:</span>
          <span className="text-gray-900">{category}</span>
        </li>
        <li className="flex items-center">
          <span className="font-semibold text-gray-600 w-40">Prix:</span>
          <span className="text-gray-900">{price}DH</span>
        </li>
        <li>
          <div className="flex justify-center items-center bg-gray-100 border border-dashed border-gray-300 rounded-md p-4">
            {imagePreview ? (
              <img src={imagePreview} alt="Produit" className="w-32 h-32 object-contain" onError={(e) => (e.target.style.display = "none")} />
            ) : (
              <span>Loading...</span>
            )}
          </div>
        </li>
      </ul>
    </article>
  );
}
