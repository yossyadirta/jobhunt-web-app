import {
  FETCH_DETAIL_JOB,
  FETCH_JOBS,
  LOADING,
  ERROR,
} from "../actions/actionTypes";

const initialState = {
  jobs: [],
  detailJob: {},
  skills: [],
  loading: true,
  error: null,
};

export default function jobReducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case FETCH_DETAIL_JOB:
      return {
        ...state,
        detailJob: action.payload,
        skills: action.payload.Skills,
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
