import { useSelector } from "react-redux";
import Produit from "./cards/Produit";

export default function Produits() {
  const produits = useSelector((state) => state.produitReducer.produits);
  const categories = useSelector((state) => state.categorieReducer.categories);

  return (
    <div className="container mx-auto p-8 text-center flex flex-wrap gap-6 justify-start">
      {produits.length > 0 && categories.length > 0 ? (
        produits.map((produit, index) => {
          const categorie = categories.find((item) => item.id == produit.categorie);
          return <Produit key={index} produit={produit} categorie={categorie} />;
        })
      ) : (
        <p className="text-gray-500 w-full mt-10 text-lg">No products available.</p>
      )}
    </div>
  );
}
