import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="bg-[#f7faff] h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-20 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Link
              to="/"
              className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900"
            >
              <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
            </Link>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Register
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Register an account to apply your dream job!
            </p>
            <form className="mt-8 space-y-6">
              <input type="hidden" name="remember" value="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <input
                    type="text"
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-400 focus:outline-none focus:ring-gray-400 sm:text-sm"
                    placeholder="Username"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    autoComplete="off"
                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-400 focus:outline-none focus:ring-gray-400 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    autoComplete="off"
                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-400 focus:outline-none focus:ring-gray-400 sm:text-sm"
                    placeholder="Password"
                  />
                </div>

                <div>
                  <input
                    type="number"
                    autoComplete="off"
                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-400 focus:outline-none focus:ring-gray-400 sm:text-sm"
                    placeholder="Phone Number (Optional)"
                  />
                </div>

                <div className="pb-8">
                  <textarea
                    type="text"
                    autoComplete="off"
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-400 focus:outline-none focus:ring-gray-400 sm:text-sm"
                    placeholder="Adress (Optional)"
                  ></textarea>
                </div>

                <div className="pb-4">
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent  bg-[#0086FF] py-2 px-4 text-sm font-medium text-white hover:bg-[#1d79c9] focus:outline-none focus:ring-2 focus:ring-[#0086FF] focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                    Register
                  </button>
                </div>
                <p className="mt-2 text-center text-sm text-gray-600">
                  Already have an account?
                  <Link
                    to="/login"
                    className="font-medium text-primary-900 hover:underline hover:text-[#0086FF]"
                  >
                    <span className="text-[#0086FF]"> Sign In</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
