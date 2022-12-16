import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/userAction";
import Swal from "sweetalert2";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });

  const [validateInput, setValidateInput] = useState(null);

  const handleChangeLogin = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setInputLogin({
      ...inputLogin,
      [name]: value,
    });
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    if (!inputLogin.email || !inputLogin.password) {
      setValidateInput(true);
    } else {
      dispatch(login(inputLogin))
        .then((data) => {
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
            title: "Log in successfully",
          });
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("username", data.username);
          navigate("/jobs");
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Login failed",
            text: "Invalid email/password",
          });
        });
    }
  };
  return (
    <section className="bg-slate-100">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900">
              <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Log in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Log in on your profile to apply job!
            </p>
            {validateInput && (
              <div
                className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg"
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
                <div>Email/Password can't be blank.</div>
              </div>
            )}
            <form onSubmit={handleSubmitLogin} className="mt-8 space-y-6">
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <input
                    type="email"
                    name="email"
                    value={inputLogin.email}
                    onChange={handleChangeLogin}
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-400 focus:outline-none focus:ring-gray-400 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    value={inputLogin.password}
                    onChange={handleChangeLogin}
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-400 focus:outline-none focus:ring-gray-400 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#0086FF] py-2 px-4 text-sm font-medium text-white hover:bg-[#1d79c9] focus:outline-none focus:ring-2 focus:ring-[#0086FF] focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
