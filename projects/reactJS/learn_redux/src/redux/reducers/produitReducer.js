let initialState = { produits: [] };

export default function produitReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PRODUITS":
      return { ...state, produits: [...action.payload] };

    case "AJOUTER_PRODUIT":
      return { ...state, produits: [action.payload, ...state.produits] };

    case "MODIFIER_PRODUIT":
      return {
        ...state,
        produits: state.produits.map((produit) => (produit.id === action.payload.id ? action.payload : produit)),
      };

    case "SUPPRIMER_PRODUIT":
      return {
        ...state,
        produits: state.produits.filter((produit) => produit.id !== action.payload),
      };

    case "TEST":
      console.log(action.payload.observation);
      return action.payload.observation;

    case "REMPLIR_PRODUIT":
      return { ...state, produits: action.payload };

    default:
      return state;
  }
}
