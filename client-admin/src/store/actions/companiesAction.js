import { BASE_URL } from "../../config/baseUrl";
import { FETCH_COMPANIES, FETCH_DETAIL_COMPANY, LOADING } from "./actionTypes";
import Swal from "sweetalert2";

export function setLoading(payload) {
  return (dispatch) => {
    dispatch({ type: LOADING, payload });
  };
}

export function fetchCompanies() {
  return (dispatch) => {
    fetch(`${BASE_URL}/companies`, {
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error({ msg: "error" });
        }
        return res.json();
      })
      .then((data) => dispatch({ type: FETCH_COMPANIES, payload: data }))
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Fetch failed",
        });
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function createCompany(payload) {
  return async (dispatch) => {
    return fetch(`${BASE_URL}/companies`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (!res.ok) {
        throw new Error({ msg: "error" });
      }
      return res.json();
    });
  };
}

export function deleteCompany(id) {
  return (dispatch) => {
    fetch(`${BASE_URL}/companies/${id}`, {
      method: "DELETE",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error({ msg: "error" });
        }
        res.json();
      })
      .then((_) => {
        dispatch(fetchCompanies());
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Delete failed",
        });
      });
  };
}

export function fetchDetailCompany(id) {
  return (dispatch) => {
    fetch(`${BASE_URL}/companies/${id}`, {
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error({ msg: "error" });
        }
        return res.json();
      })
      .then((data) => {
        dispatch({ type: FETCH_DETAIL_COMPANY, payload: data });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Fetch failed",
        });
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function editCompany(id, payload) {
  return async (dispatch) => {
    return fetch(`${BASE_URL}/companies/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (!res.ok) {
        throw new Error({ msg: "error" });
      }
      return res.json();
    });
  };
}
