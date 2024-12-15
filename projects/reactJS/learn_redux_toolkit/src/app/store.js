import { configureStore } from "@reduxjs/toolkit";
import CompteurReducer from "../features/compteur/compteurSlice";

const store = configureStore({
  reducer: {
    compteur: CompteurReducer,
  },
});

export default store;
