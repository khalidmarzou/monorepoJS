import { Link } from "react-router-dom";

export default function Produit({ produit, categorie, onSelectProduct, isSelected }) {
  return (
    <div
      className={`relative w-96 h-auto border border-gray-200 shadow-md p-8 rounded-xl bg-white flex flex-col justify-between mx-auto transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out cursor-pointer ${
        isSelected ? "bg-blue-100" : "bg-white"
      }`}
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{produit.libelle}</h2>
      <div className="flex justify-center items-center mb-4">
        <span className="px-3 py-1 bg-blue-500 text-white rounded-full font-medium text-sm uppercase tracking-wide">{categorie.libelle}</span>
      </div>
      <div className="flex justify-between items-center text-gray-700 mb-2">
        <span className="text-lg font-medium">Quantité en stock:</span>
        <span className="text-lg">{produit.quantiteStock} unités</span>
      </div>
      <div className="flex justify-between items-center text-gray-700 mb-2">
        <span className="text-lg font-medium">Prix:</span>
        <span className="text-2xl font-bold text-green-500">{produit.prix} €</span>
      </div>

      <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center space-x-4 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
        <button
          onClick={() => onSelectProduct(produit.id)}
          className="px-4 py-2 bg-blue-600 text-white rounded font-medium text-sm hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {isSelected ? "Désélectionner" : "Sélectionner"}
        </button>
        <Link
          to={`/produits/editer/${produit.id}`}
          className="px-4 py-2 bg-gray-600 text-white rounded font-medium text-sm hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Modifier
        </Link>
      </div>
    </div>
  );
}
