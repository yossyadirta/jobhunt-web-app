import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../store/actions/userAction";
import Swal from "sweetalert2";

export default function FormRegistration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const [validateInput, setValidateInput] = useState(null);
  const [validateTrigger, setValidateTrigger] = useState(null);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input.username) {
      setValidateTrigger("username");
      setValidateInput(true);
    } else if (!input.email) {
      setValidateTrigger("email");
      setValidateInput(true);
    } else if (!input.password) {
      setValidateTrigger("password");
      setValidateInput(true);
    } else {
      dispatch(register(input))
        .then(() => {
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
            title: "Create Admin successfully",
          });
          navigate("/admin-registration");
          setInput({
            username: "",
            email: "",
            password: "",
            phoneNumber: "",
            address: "",
          });
          setValidateInput(null);
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Create Admin failed",
            text: "Try again!",
          });
        });
    }
  };

  return (
    <div className="max-w-3xl px-4 mx-auto text-left">
      <form onSubmit={handleSubmit}>
        <div className="p-6 pl-12 bg-white border border-gray-100 rounded-lg shadow">
          <div className="pb-6 border-b border-gray-100 ">
            <h2 className="text-xl font-bold text-gray-800 md:text-3xl ">
              Create New Admin Account
            </h2>
            {validateInput && (
              <div
                className="flex p-4 mt-4 text-sm text-red-700 bg-red-100 rounded-lg"
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
                  {validateTrigger === "username" && (
                    <p>Username is required</p>
                  )}
                  {validateTrigger === "email" && <p>Email is required</p>}
                  {validateTrigger === "password" && (
                    <p>Password is required</p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="py-6 border-b border-gray-100 ">
            <div className="w-full md:w-9/12">
              <div className="flex flex-wrap -m-3">
                <div className="w-full p-3 md:w-1/3">
                  <p className="text-base font-semibold text-gray-700">
                    Username
                  </p>
                </div>
                <div className="w-full p-3 md:flex-1">
                  <input
                    value={input.username}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                    type="text"
                    name="username"
                    placeholder="ExampleUsername"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="py-6 border-b border-gray-100 ">
            <div className="w-full md:w-9/12">
              <div className="flex flex-wrap -m-3">
                <div className="w-full p-3 md:w-1/3">
                  <p className="text-base font-semibold text-gray-700">
                    Email address
                  </p>
                </div>
                <div className="w-full p-3 md:flex-1">
                  <input
                    value={input.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                    type="email"
                    name="email"
                    placeholder="user@example.com"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="py-6 border-b border-gray-100 ">
            <div className="w-full md:w-9/12">
              <div className="flex flex-wrap -m-3">
                <div className="w-full p-3 md:w-1/3">
                  <p className="text-base font-semibold text-gray-700">
                    Password
                  </p>
                </div>
                <div className="w-full p-3 md:flex-1">
                  <input
                    value={input.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                    type="password"
                    name="password"
                    placeholder="input password"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="py-6 border-b border-gray-100 ">
            <div className="w-full md:w-9/12">
              <div className="flex flex-wrap -m-3">
                <div className="w-full p-3 md:w-1/3">
                  <p className="text-base font-semibold text-gray-700">
                    Phone Number
                  </p>
                </div>
                <div className="w-full p-3 md:flex-1">
                  <input
                    value={input.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                    type="number"
                    name="phoneNumber"
                    placeholder="08xx xxxx xxxx"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="py-6 border-b border-gray-100">
            <div className="w-full md:w-9/12">
              <div className="flex flex-wrap -m-3">
                <div className="w-full p-3 md:w-1/3">
                  <p className="text-sm font-semibold text-gray-800">Address</p>
                </div>
                <div className="w-full p-3 md:flex-1">
                  <textarea
                    rows="4"
                    value={input.address}
                    onChange={handleChange}
                    name="address"
                    type="message"
                    placeholder="your text here.."
                    className="block w-full px-4 py-4 leading-tight placeholder-gray-400 border rounded "
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-start pt-6 flex-wrap -m-1.5">
            <div className="w-full md:w-auto p-1.5 flex justify-end">
              <button
                type="submit"
                className="flex flex-wrap justify-end w-full px-8 py-2 text-sm font-medium text-white bg-[#0086FF] rounded-md hover:bg-[#1371c3] "
              >
                <p>Save</p>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
