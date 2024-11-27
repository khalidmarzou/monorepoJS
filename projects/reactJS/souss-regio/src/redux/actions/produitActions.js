import axios from "axios";
import { SET_PRODUITS, ADD_PRODUIT, DELETE_PRODUIT, LOADING, ERROR } from "../types/produitTypes";

const setLoading = () => ({ type: LOADING });

const setError = (error) => ({ type: ERROR, payload: error });




export function setProduitsAction() {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await axios.get("http://196.127.103.9:3000/api/produits");
      dispatch({
        type: SET_PRODUITS,
        payload: {
          produits: response.data,
        },
      });
    } catch (error) {
      dispatch(setError("Failed to fetch products"));
    }
  };
}

export function addProduitAction(produit) {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await axios.post("http://196.127.103.9:3000/api/produits", produit);
      dispatch({
        type: ADD_PRODUIT,
        payload: response.data,
      });
    } catch (error) {
      dispatch(setError("Failed to add product"));
    }
  };
}

export function deleteProduitAction(produitID) {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      await axios.delete(`http://196.127.103.9:3000/api/produits/${produitID}`);
      dispatch({
        type: DELETE_PRODUIT,
        payload: produitID,
      });
    } catch (error) {
      dispatch(setError("Failed to delete product"));
    }
  };
}
