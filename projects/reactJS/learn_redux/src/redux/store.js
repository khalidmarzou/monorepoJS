import { legacy_createStore, applyMiddleware } from "redux";
import produitReducer from "./reducers/produitReducer";
import { combineReducers } from "redux";
import categorieReducer from "./reducers/categorieReducer";
import { thunk } from "redux-thunk";

const reducers = combineReducers({
  categorieReducer: categorieReducer,
  produitReducer: produitReducer,
});

const store = legacy_createStore(reducers, applyMiddleware(thunk));

export default store;
