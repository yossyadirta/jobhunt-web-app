import CompanyBrand from "../components/CompanyBrand.jsx";
import { useEffect } from "react";
import JobCard from "../components/JobCard.jsx";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../store/actions/jobsAction.js";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { fetchCompanies } from "../store/actions/companiesAction.js";
import Loading from "../components/Loading.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  const { jobs, loading } = useSelector((state) => state.jobs);
  const { companies } = useSelector((state) => state.companies);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams({
    search: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setSearchParams({
      ...searchParams,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/jobs?${searchParams}`);
  };

  useEffect(() => {
    dispatch(fetchJobs(searchParams, jobs.currentPage));
    dispatch(fetchCompanies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <section>
        <div>
          <div className="w-full bg-cover bg-no-repeat max-h-full pb-24 bg-banner">
            <div className="px-6 py-12 pt-48 lg:my-12 md:px-12 text-gray-800 text-center lg:text-left">
              <div className="container px-56">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="mt-12 lg:mt-0">
                    <h1 className="text-5xl font-semibold tracking-normal leading-tight pb-8 text-white drop-shadow-lg">
                      Your dream job is <br />
                      <span>just a click away</span>
                    </h1>
                    <p className="text-xl font-medium tracking-normal leading-tight pb-8 text-white drop-shadow-lg">
                      The simplest way to career opportunities starts here
                    </p>
                    <form
                      onSubmit={handleSubmit}
                      className="md:flex flex-row pb-12"
                    >
                      <input
                        type="text"
                        value={searchParams.search}
                        name="search"
                        onChange={handleChange}
                        className="w-96 form-control block px-4 py-2 mb-2 md:mb-0 md:mr-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:bg-[#1b83dd]-blue-600 focus:outline-none"
                        placeholder="Search for a job title"
                      />
                      <button
                        type="submit"
                        className="p-2.5 text-sm font-medium text-white bg-[#0086FF] rounded-md border border-[#1b83dd] hover:bg-[#1b83dd] focus:ring-4 focus:outline-none focus:ring-[#1b83dd]"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                        <span className="sr-only">Search</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-64">
            <div className="mb-14-mt-20 rounded-lg shadow-md lg:-mt-20 bg-white">
              <div className="container p-4 mx-auto text-center">
                <h2 className="text-4xl font-bold pt-12 text-gray-800">
                  Work with the most innovative companies around the world
                </h2>
              </div>
              <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-400 pb-12">
                {companies
                  .map((company) => {
                    return <CompanyBrand key={company.id} company={company} />;
                  })
                  .slice(0, 8)}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative pt-4">
            <h2 className="w-full text-4xl font-bold text-center py-12">
              Find a career that works for you
            </h2>
          </div>
          <div className="justify-center px-64 pb-12 mx-auto">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
              {jobs?.rows
                ?.map((job) => {
                  return <JobCard key={job.id} job={job} />;
                })
                .slice(0, 3)}
            </div>
            <div className="justify-center flex-1 py-6 ">
              <Link
                to="jobs"
                className="flex justify-center items-center hover:text-[#3c8fd7] "
              >
                <h4 className="text-xl font-semibold pr-2 text-[#0086FF] underline underline-offset-2">
                  See all Jobs
                </h4>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-7 h-7 text-[#0086FF]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-hire h-96">
          <div className="container flex flex-col items-center px-40 py-16 pb-24 mx-auto text-center ">
            <h1 className="text-3xl pt-4 font-semibold leading-none sm:text-5xl text-white">
              More than 5 million professionals have found jobs through Jobhunt
            </h1>
            <p className="mt-6 mb-4 text-xl xl:max-w-3xl text-white">
              Are you ready to find yours?
            </p>
            <div className="flex flex-wrap justify-center">
              <Link
                to="jobs"
                className="text-[#0086FF] hover:text-white bg-white focus:ring-4 focus:outline-none font-medium rounded-md text-lg px-6 py-3 text-center hover:bg-[#0086FF]"
              >
                Get Hired Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
