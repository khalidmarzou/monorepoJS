import React, { useState, useEffect } from "react";
import InfoProd from "./components/InfoProd";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import axios from "axios";
import Affiche from "./components/Afiiche";
import Recherche from "./components/Recherche";
import PartieRedux from "./components/PartieRedux";
import PwdPattern from "./components/PwdPattern";


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://196.127.103.9:3000/api/produits")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/question_1" element={<InfoProd />} />
        <Route path="/question_2_3" element={<Affiche products={products} />} />
        <Route path="/question_4" element={<Recherche products={products} />} />
        <Route path="/partie_redux" element={<PartieRedux />} />
        <Route path="/pwd" element={<PwdPattern />} />
      </Routes>
    </>
  );
}

export default App;
