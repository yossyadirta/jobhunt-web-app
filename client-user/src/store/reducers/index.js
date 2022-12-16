import { combineReducers } from "redux";
import jobReducers from "./jobReducers";
import companiesReducers from "./companiesReducers";

const rootReducer = combineReducers({
  jobs: jobReducers,
  companies: companiesReducers,
});

export default rootReducer;
