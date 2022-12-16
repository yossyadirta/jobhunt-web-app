import { FETCH_COMPANIES } from "./actionTypes";
import { LOADING } from "./actionTypes";
import { BASE_URL } from "../../config/baseUrl";
import Swal from "sweetalert2";

export function setLoading(payload) {
  return (dispatch) => {
    dispatch({ type: LOADING, payload });
  };
}

export function fetchCompanies() {
  return (dispatch) => {
    fetch(`${BASE_URL}/companies`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error Fetch");
        }
        return res.json();
      })
      .then((data) => dispatch({ type: FETCH_COMPANIES, payload: data }))
      .catch((error) => {
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
