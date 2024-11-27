import { useState } from "react";
import { useDispatch } from "react-redux";
import { ajouterProduitAction } from "../redux/actions/produitActions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Ajouter() {
  const produits = useSelector((state) => state.produitReducer.produits);
  const categories = useSelector((state) => state.categorieReducer.categories);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [produit, setProduit] = useState({
    id: getID(),
    libelle: "",
    categorie: "",
    prix: "",
    quantiteStock: "",
  });

  function handleChange(e) {
    setProduit({ ...produit, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(ajouterProduitAction(produit));
    console.log(produit);
    navigate("/produits");
  }

  function getID() {
    const id = Math.max(...produits.map((item) => item.id)) + 1;
    return id;
  }

  function handleClickTest() {
    dispatch({
      type: "TEST",
      payload: {
        observation: "test",
      },
    });
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Ajouter Un Produit</h2>

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
            onChange={handleChange}
            disabled
            required
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
            required
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
            required
          >
            <option value={""}>Selectionner une categorie</option>
            {categories.map((categorie, index) => (
              <option key={index} value={categorie.id}>
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
            required
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
            required
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
        <div className="flex justify-end">
          <button
            onClick={handleClickTest}
            className="px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            test
          </button>
        </div>
      </form>
    </div>
  );
}
