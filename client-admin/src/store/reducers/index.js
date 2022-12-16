import { combineReducers } from "redux";
import companiesReducers from "./companiesReducers";
import jobReducers from "./jobsReducers";

const rootReducer = combineReducers({
  jobs: jobReducers,
  companies: companiesReducers,
});

export default rootReducer;
