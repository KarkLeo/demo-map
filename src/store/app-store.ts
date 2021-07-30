import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { appReducer } from ".";

export const appStore = createStore(
  appReducer,
  composeWithDevTools()
)