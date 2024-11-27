import { useDispatch } from "react-redux";
import { setProduitsAction } from "../redux/actions/produitActions";
import { useEffect } from "react";
import Afiiche from "./Afiiche";
import { useSelector } from "react-redux";

export default function PartieRedux() {
  const dispatch = useDispatch();
  const { produits, loading, error } = useSelector((state) => state.produit);

  useEffect(() => {
    dispatch(setProduitsAction());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full">
      <Afiiche products={produits} />
    </div>
  );
}
