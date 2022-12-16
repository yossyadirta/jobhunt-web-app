import { BASE_URL } from "../../config/baseUrl";
import { LOADING } from "./actionTypes";

export function setLoading(payload) {
  return (dispatch) => {
    dispatch({ type: LOADING, payload });
  };
}

export function login(payload) {
  return async (dispatch) => {
    return fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (!res.ok) throw new Error({ msg: "error" });
      return res.json();
    });
  };
}

export function register(payload) {
  return async (dispatch) => {
    return fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (!res.ok) throw new Error({ msg: "error" });
      return res.json();
    });
  };
}
