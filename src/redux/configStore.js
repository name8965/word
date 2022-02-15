import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import word from "./modules/word";

const middlewars = [thunk];
const rootReducer = combineReducers({ word });
const enhancer = applyMiddleware(...middlewars);

const store = createStore(rootReducer, enhancer);

export default store;
