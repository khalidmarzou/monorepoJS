import Nav from "./components/layouts/Nav";
import { Routes, Route } from "react-router-dom";
import Index from "./components/layouts/Index";
import Produits from "./components/layouts/Produits";
import Editer from "./components/layouts/Editer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [produits, setProduits] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selctedProduits, setSelctedProduits] = useState([]);

  useEffect(() => {
    axios
      .get("http://196.127.103.9:3000/api/produits")
      .then((response) => setProduits(response.data))
      .catch((error) => console.error("Error fetching products:", error));

    axios
      .get("http://196.127.103.9:3000/api/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  function onSelectProduct(id) {
    const selectedProduct = produits.find((produit) => produit.id === id);

    if (selectedProduct) {
      const isSelected = selctedProduits.some((p) => p.id === id);

      if (isSelected) {
        setSelctedProduits(selctedProduits.filter((p) => p.id !== id));
      } else {
        setSelctedProduits([...selctedProduits, selectedProduct]);
      }
    }
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/produits"
          element={<Produits produits={produits} categories={categories} onSelectProduct={onSelectProduct} selctedProduits={selctedProduits} />}
        />
        <Route path="/produits/editer/:id" element={<Editer produits={produits} setProduits={setProduits} categories={categories} />} />
      </Routes>
    </>
  );
}

export default App;
