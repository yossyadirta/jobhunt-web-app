import { FETCH_COMPANIES, LOADING } from "../actions/actionTypes";

const initialState = {
  companies: [],
  loading: true,
};

export default function companiesReducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
