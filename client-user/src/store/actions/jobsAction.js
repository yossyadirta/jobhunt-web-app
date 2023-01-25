import { BASE_URL } from "../../config/baseUrl";
import { FETCH_DETAIL_JOB, FETCH_JOBS, FETCH_MORE_JOBS } from "./actionTypes";
import { LOADING } from "./actionTypes";
import Swal from "sweetalert2";

export function setLoading(payload) {
  return (dispatch) => {
    dispatch({ type: LOADING, payload });
  };
}

export function fetchJobs(searchParams) {
  let currentSearch = "";
  if (searchParams) {
    currentSearch = `${searchParams}`;
  } else {
    currentSearch = "";
  }
  let find = currentSearch;

  return (dispatch) => {
    fetch(`${BASE_URL}/jobs?page[number]=1&${find}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error Fetch");
        }
        return res.json();
      })
      .then((data) => {
        dispatch({ type: FETCH_JOBS, payload: data });
      })
      .catch((err) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: "Job not found",
        });
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}
export function fetchMoreJobs(page) {
  if (!page) {
    page = 1;
  }

  return (dispatch) => {
    fetch(`${BASE_URL}/jobs?page[number]=${page}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error Fetch");
        }
        return res.json();
      })
      .then((data) => {
        dispatch({ type: FETCH_MORE_JOBS, payload: data });
      })
      .catch((err) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: "Job not found",
        });
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}
export function fetchDetailJob(id) {
  return (dispatch) => {
    fetch(`${BASE_URL}/jobs/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error Fetch");
        return res.json();
      })
      .then((data) => {
        dispatch({ type: FETCH_DETAIL_JOB, payload: data });
      })
      .catch((err) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: "Job not found",
        });
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}
