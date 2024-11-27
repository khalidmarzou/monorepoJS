import Produit from "../cards/Produit";

export default function Produits({ produits, categories, onSelectProduct, selctedProduits }) {
  return (
    <div className="container mx-auto p-8 text-center flex flex-wrap gap-6 justify-start">
      {produits.length > 0 && categories.length > 0 ? (
        produits.map((produit) => {
          const categorie = categories.find((categorie) => categorie.id === produit.categorie);
          const isSelected = selctedProduits.some((selectedProduit) => selectedProduit.id === produit.id);

          return <Produit key={produit.id} produit={produit} categorie={categorie} onSelectProduct={onSelectProduct} isSelected={isSelected} />;
        })
      ) : (
        <p className="text-gray-500 w-full mt-10 text-lg">No products available.</p>
      )}


      <div className="fixed bg-gray-50 bottom-0 py-5 w-screen left-0">
      <button
          className="px-12 py-2 bg-red-600 text-white rounded font-bold text-lg hover:bg-red-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}
