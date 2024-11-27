import { SET_PRODUITS, ADD_PRODUIT, DELETE_PRODUIT } from "../types/produitTypes";

const initialState = {
  produits: [],
  loading: false,
  error: null,
};

const produitReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUITS:
      return {
        ...state,
        produits: action.payload.produits,
        loading: false,
        error: action.payload.error || null,
      };

    case ADD_PRODUIT:
      return {
        ...state,
        produits: [...state.produits, action.payload],
        loading: false,
        error: null,
      };

    case DELETE_PRODUIT:
      return {
        ...state,
        produits: state.produits.filter((produit) => produit._id !== action.payload),
        loading: false,
        error: null,
      };

    case "LOADING":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default produitReducer;
