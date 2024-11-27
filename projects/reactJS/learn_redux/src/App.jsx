import Nav from "./layouts/Nav";
import { Routes, Route } from "react-router-dom";
import Index from "./layouts/Index";
import Produits from "./layouts/Produits";
import axios from "axios";
import { setProduitsAction } from "./redux/actions/produitActions";
import { useDispatch } from "react-redux";
import Ajouter from "./layouts/Ajouter";
import Editer from "./layouts/Editer";
import { setCategoriesAction } from "./redux/actions/categorieActions";
import NewProduits from "./layouts/NewProduits";

function App() {
  const dispatch = useDispatch();

  axios
    .get("http://196.127.103.9:3000/api/produits")
    .then((response) => dispatch(setProduitsAction(response.data)))
    .catch((err) => console.error(err));

  axios
    .get("http://196.127.103.9:3000/api/categories")
    .then((response) => dispatch(setCategoriesAction(response.data)))
    .catch((err) => console.error(err));

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/produits/ajouter" element={<Ajouter />} />
        <Route path="/produits/modifier/:id" element={<Editer />} />
        <Route path="/list" element={<NewProduits />} />
      </Routes>
    </>
  );
}

export default App;
