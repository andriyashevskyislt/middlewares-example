import { loadersReducer } from "../reducers/loadersReducer";
import { teamReducer } from "../teamsList/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  ui: loadersReducer,
  teams: teamReducer
});
