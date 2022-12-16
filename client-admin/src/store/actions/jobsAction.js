import { BASE_URL } from "../../config/baseUrl";
import { FETCH_JOBS, FETCH_DETAIL_JOB, ERROR, LOADING } from "./actionTypes";
import Swal from "sweetalert2";

export function setLoading(payload) {
  return (dispatch) => {
    dispatch({ type: LOADING, payload });
  };
}

export function fetchJobs() {
  return (dispatch) => {
    fetch(`${BASE_URL}/jobs`, {
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
      .then((data) => dispatch({ type: FETCH_JOBS, payload: data }))
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

export function fetchDetailJob(id) {
  return (dispatch) => {
    fetch(`${BASE_URL}/jobs/${id}`, {
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
        dispatch({ type: FETCH_DETAIL_JOB, payload: data });
      })
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

export function deleteJobs(id) {
  return (dispatch) => {
    fetch(`${BASE_URL}/jobs/${id}`, {
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
        dispatch(fetchJobs());
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Delete failed",
        });
      });
  };
}

export function createJob(payloadJob, payloadSkill) {
  let skill = [];
  let level = [];

  payloadSkill.map((el) => {
    skill.push(el.name);
    level.push(el.level);
    return el;
  });

  const payload = {
    title: payloadJob.title,
    description: payloadJob.description,
    companyId: payloadJob.companyId,
    jobType: payloadJob.jobType,
    skill,
    level,
  };

  return async (dispatch) => {
    if (!skill[skill.length - 1]) {
      dispatch({ type: ERROR, payload: "Error" });
    } else {
      return fetch(`${BASE_URL}/jobs`, {
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
    }
  };
}

export function editJob(id, payloadJob, payloadSkill) {
  let skill = [];
  let level = [];

  payloadSkill.map((el) => {
    skill.push(el.name);
    level.push(el.level);
    return el;
  });

  const payload = {
    title: payloadJob.title,
    description: payloadJob.description,
    companyId: payloadJob.companyId,
    jobType: payloadJob.jobType,
    skill,
    level,
  };

  return async (dispatch) => {
    if (!skill[skill.length - 1]) {
      dispatch({ type: ERROR, payload: "Error" });
    } else {
      return fetch(`${BASE_URL}/jobs/${id}`, {
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
    }
  };
}
