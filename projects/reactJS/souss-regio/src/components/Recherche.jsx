import React, { useState } from "react";
import Affiche from "./Afiiche";

function Recherche({ products }) {
  const [filtredProducts, setFiltredProducts] = useState([...products]);
  const [category, setCategory] = useState("");

  function handleClick() {
    if (category === "") {
      setFiltredProducts([...products]);
    } else {
      setFiltredProducts(products.filter((product) => product.category === category));
    }
  }

  return (
    <>
      <div className="w-1/3 mt-3 mx-auto p-4">
        <div className="relative">
          <input
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            name="category"
            placeholder="Rechercher..."
            className="w-full p-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={handleClick}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Rechercher
          </button>
        </div>
      </div>

      {filtredProducts.length > 0 ? (
        <Affiche products={filtredProducts} />
      ) : (
        <div className="text-center mt-6 p-4 bg-gray-100 border border-gray-300 rounded-lg">
          <p className="text-xl text-gray-600 font-semibold">Aucun produit à afficher</p>
        </div>
      )}
    </>
  );
}

export default Recherche;
