import { combineReducers } from "redux";
import produitReducer from "./produitReducer";

const rootReducer = combineReducers({
  produit: produitReducer,
});

export default rootReducer;
