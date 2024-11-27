import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Editer({ produits, categories, setProduits }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produit, setProduit] = useState({
    id: "",
    libelle: "",
    categorie: "",
    prix: 0,
    quantiteStock: 0,
  });

  useEffect(() => {
    const produitToEdit = produits.find((p) => p.id === parseInt(id, 10));
    if (produitToEdit) {
      setProduit(produitToEdit);
    }
  }, [id, produits]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduit((prevProduit) => ({
      ...prevProduit,
      [name]: value,
    }));
  };

  const editerProduit = () => {
    const updatedProduits = produits.map((p) =>
      p.id === produit.id ? produit : p
    );
    setProduits(updatedProduits);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editerProduit();
    navigate("/produits");
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Modifier le Produit</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="id" className="block text-lg font-medium text-gray-700 mb-2">
            ID
          </label>
          <input
            name="id"
            type="text"
            className="w-full p-3 bg-gray-100 text-gray-600 rounded-lg border border-gray-300 cursor-not-allowed"
            value={produit.id}
            disabled
          />
        </div>

        <div className="mb-6">
          <label htmlFor="libelle" className="block text-lg font-medium text-gray-700 mb-2">
            Libellé
          </label>
          <input
            name="libelle"
            value={produit.libelle}
            onChange={handleChange}
            type="text"
            className="w-full p-3 bg-gray-100 text-gray-600 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Nom du produit"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="categorie" className="block text-lg font-medium text-gray-700 mb-2">
            Catégorie
          </label>
          <select
            name="categorie"
            value={produit.categorie}
            onChange={handleChange}
            className="w-full p-3 bg-gray-100 text-gray-600 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            {categories.map((categorie) => (
              <option key={categorie.id} value={categorie.id}>
                {categorie.libelle}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="prix" className="block text-lg font-medium text-gray-700 mb-2">
            Prix
          </label>
          <input
            name="prix"
            type="number"
            value={produit.prix}
            onChange={handleChange}
            className="w-full p-3 bg-gray-100 text-gray-600 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Prix en €"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="quantiteStock" className="block text-lg font-medium text-gray-700 mb-2">
            Quantité en Stock
          </label>
          <input
            name="quantiteStock"
            type="number"
            value={produit.quantiteStock}
            onChange={handleChange}
            className="w-full p-3 bg-gray-100 text-gray-600 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Quantité en stock"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}
