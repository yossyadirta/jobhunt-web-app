import { FETCH_JOBS, LOADING, FETCH_DETAIL_JOB } from "../actions/actionTypes";

const initialState = {
  jobs: [],
  detailJob: [],
  loading: true,
};

export default function jobReducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOBS:
      const newJobsList = action.payload.rows;
      // console.log(newJobsList, "<<< payload dari reducer");
      const { jobs } = state;
      return {
        ...state,
        jobs: [...jobs, ...newJobsList],
      };
    case FETCH_DETAIL_JOB:
      return {
        ...state,
        detailJob: action.payload,
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
