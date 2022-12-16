import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCompanies } from "../store/actions/companiesAction";
import Loading from "../components/Loading";
import { createJob } from "../store/actions/jobsAction";
import Swal from "sweetalert2";

export default function FormAddJob() {
  const { companies, loading } = useSelector((state) => state.companies);
  const [input, setInput] = useState({
    title: "",
    description: "",
    companyId: 0,
    jobType: "",
  });

  let initialStateSkill = {
    name: "",
    level: "",
  };

  const [inputSkill, setInputSkill] = useState([initialStateSkill]);
  const [validateInput, setValidateInput] = useState(null);
  const [validateTrigger, setValidateTrigger] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeSkill = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    const name = e.target.name;

    const skillData = inputSkill.map((el, index) => {
      if (index === +id) {
        return {
          ...inputSkill[id],
          [name]: value,
        };
      } else {
        return el;
      }
    });
    setInputSkill(skillData);
  };

  const handleAddMoreSkill = (e) => {
    e.preventDefault();
    setInputSkill([...inputSkill, initialStateSkill]);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.title) {
      setValidateTrigger("title");
      setValidateInput(true);
    } else if (!input.description) {
      setValidateTrigger("description");
      setValidateInput(true);
    } else if (!input.companyId) {
      setValidateTrigger("companyId");
      setValidateInput(true);
    } else if (!input.jobType) {
      setValidateTrigger("jobType");
      setValidateInput(true);
    } else if (!inputSkill[0].name || !inputSkill[0].level) {
      setValidateTrigger("skills");
      setValidateInput(true);
    } else {
      dispatch(createJob(input, inputSkill)).then((res) => {
        if (!res) {
          Swal.fire({
            icon: "error",
            title: "Create Job failed",
          });
        } else {
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
            icon: "success",
            title: "Create Job successfully",
          });
          navigate("/jobs");
          setValidateInput(null);
        }
      });
    }
  };

  useEffect(() => {
    dispatch(fetchCompanies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-4xl px-4 mx-auto text-left">
      <div className="p-6 bg-white rounded-md shadow">
        <h2 className="mb-4 text-3xl font-semibold py-4 leading-6 text-gray-900 ">
          Add New Jobs
        </h2>
        {validateInput && (
          <div
            className="flex p-4 mt-4 text-sm text-red-700 bg-red-100 rounded-lg mb-5"
            role="alert"
          >
            <svg
              aria-hidden="true"
              className="flex-shrink-0 inline w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Info</span>
            <div>
              {validateTrigger === "title" && <p>Title is required</p>}
              {validateTrigger === "description" && (
                <p>Description is required</p>
              )}
              {validateTrigger === "companyId" && <p>Company is required</p>}
              {validateTrigger === "jobType" && <p>Job type is required</p>}
              {validateTrigger === "skills" && <p>skills is required</p>}
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium ">Job Title</label>
            <input
              value={input.title}
              onChange={handleChange}
              className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
              type="text"
              name="title"
              placeholder="Input a job title"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium ">
              Job Description
            </label>
            <textarea
              value={input.description}
              onChange={handleChange}
              className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded "
              name="description"
              rows="5"
              placeholder="Write about job description"
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium ">Company</label>
            <div className="relative">
              <select
                value={input.companyId}
                onChange={handleChange}
                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded appearance-none "
                name="companyId"
              >
                <option defaultValue="">Choose company</option>
                {companies.map((el, index) => {
                  return (
                    <option value={el.id} key={index}>
                      {el.name}
                    </option>
                  );
                })}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 pointer-events-none">
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium ">Job Type</label>
            <div className="relative">
              <select
                value={input.jobType}
                onChange={handleChange}
                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded appearance-none "
                name="jobType"
              >
                <option defaultValue="">Choose job type</option>
                <option>Full Time</option>
                <option>Part Time</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 pointer-events-none">
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                </svg>
              </div>
            </div>
          </div>

          {inputSkill.map((el, index) => {
            return (
              <div
                key={index}
                className="grid w-full gap-4 mb-2 lg:grid-cols-2"
              >
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Skill
                  </label>
                  <input
                    id={index}
                    name="name"
                    value={inputSkill[index].skill}
                    onChange={handleChangeSkill}
                    className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded "
                    type="text"
                    placeholder="Skill"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Level
                  </label>
                  <select
                    id={index}
                    value={inputSkill[index].level}
                    onChange={handleChangeSkill}
                    name="level"
                    className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded appearance-none "
                  >
                    <option defaultValue="">Choose Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>
            );
          })}
          <button
            onClick={handleAddMoreSkill}
            className="-mt-96 text-sm text-blue-700"
          >
            + Add more skill
          </button>

          <div className="mt-7">
            <div className="flex justify-end space-x-2">
              <button
                type="submit"
                className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase shadow-md bg-[#0086FF] rounded-md hover:bg-[#1371c3] "
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
