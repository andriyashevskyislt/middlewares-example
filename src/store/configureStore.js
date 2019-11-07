import { applyMiddleware, compose, createStore } from "redux";
import { apiMiddleware } from "../middlewares/apiMiddleware";
import { rootReducer } from "./rootReducer";

export default function configureStore(initialState) {
  const middlewareEnhancer = applyMiddleware(apiMiddleware);
  const composed = compose(
    middlewareEnhancer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return createStore(rootReducer, initialState, composed);
}
