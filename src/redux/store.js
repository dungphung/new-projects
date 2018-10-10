import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

export default function configureStore(initialState = {}) {
  let devTool = f => f;
  if (typeof window !== "undefined") {
    devTool = window.devToolsExtension ? window.devToolsExtension() : f => f;
  }
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      devTool
    )
  );
}
