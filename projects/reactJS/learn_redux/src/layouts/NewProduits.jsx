import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProduitsAction } from "../redux/actions/produitActions";
import { useSelector } from "react-redux";

export default function NewProduits() {
  const produits = useSelector((state) => state.produitReducer.produits);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduitsAction());
  }, []);

  function handleClick() {
    console.log(produits);
  }

  return (
    <>
      <button className="bg-red-500 py-2 px-4 rounded" onClick={handleClick}>
        fetch produits
      </button>
    </>
  );
}
