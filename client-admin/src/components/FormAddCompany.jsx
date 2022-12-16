import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCompany } from "../store/actions/companiesAction";
import Swal from "sweetalert2";

export default function FormAddCompany() {
  const [input, setInput] = useState({
    name: "",
    companyLogo: "",
    location: "",
    email: "",
    description: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const [validateInput, setValidateInput] = useState(null);
  const [validateTrigger, setValidateTrigger] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.name) {
      setValidateTrigger("name");
      setValidateInput(true);
    } else if (!input.companyLogo) {
      setValidateTrigger("companyLogo");
      setValidateInput(true);
    } else if (!input.location) {
      setValidateTrigger("location");
      setValidateInput(true);
    } else if (!input.email) {
      setValidateTrigger("email");
      setValidateInput(true);
    } else if (!input.description) {
      setValidateTrigger("description");
      setValidateInput(true);
    } else {
      dispatch(createCompany(input)).then(() => {
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
          title: "Create Company successfully",
        });
        navigate("/companies");
      });
    }
  };

  return (
    <div className="max-w-4xl px-4 mx-auto text-left">
      <div className="p-6 bg-white rounded-md shadow">
        <h2 className="mb-6 text-3xl font-semibold py-4 leading-6 text-gray-900 ">
          Add New Company
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
              {validateTrigger === "name" && <p>Company name is required</p>}
              {validateTrigger === "description" && (
                <p>Description is required</p>
              )}
              {validateTrigger === "companyLogo" && (
                <p>Company logo is required</p>
              )}
              {validateTrigger === "email" && <p>Company email is required</p>}
              {validateTrigger === "location" && <p>Location is required</p>}
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium ">
              Company Name
            </label>
            <input
              onChange={handleChange}
              value={input.name}
              className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
              type="text"
              name="name"
              placeholder="Input a company name"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium ">
              Company Logo
            </label>
            <input
              onChange={handleChange}
              value={input.companyLogo}
              className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
              type="text"
              name="companyLogo"
              placeholder="Input an image link"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium ">
              Company Location
            </label>
            <input
              value={input.location}
              onChange={handleChange}
              className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
              type="text"
              name="location"
              placeholder="Input company location"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium ">
              Company Email
            </label>
            <input
              value={input.email}
              onChange={handleChange}
              className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
              type="email"
              name="email"
              placeholder="Input a company email"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium ">
              Company Description
            </label>
            <textarea
              value={input.description}
              onChange={handleChange}
              className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded "
              name="description"
              rows="5"
              placeholder="Write company description"
            ></textarea>
          </div>

          <div className="mt-7">
            <div className="flex justify-end space-x-2">
              <button
                type="submit"
                className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600"
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
