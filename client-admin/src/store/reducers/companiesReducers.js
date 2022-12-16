import {
  FETCH_COMPANIES,
  FETCH_DETAIL_COMPANY,
  LOADING,
  ERROR,
} from "../actions/actionTypes";

const initialState = {
  companies: [],
  detailCompany: {},
  loading: true,
};

export default function companiesReducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      };
    case FETCH_DETAIL_COMPANY:
      return {
        ...state,
        detailCompany: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ERROR:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
