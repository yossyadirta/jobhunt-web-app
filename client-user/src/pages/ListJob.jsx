import JobListRow from "../components/JobListRow";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs, fetchMoreJobs } from "../store/actions/jobsAction.js";
import { useSearchParams } from "react-router-dom";
import Loading from "../components/Loading.jsx";

export default function ListJob() {
  const { jobs, loading } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [loadingInfiniteScroll, setLoadingInfiniteScroll] = useState(true);
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
    dispatch(fetchJobs(searchParams));
  };

  // function handleChangePage(index) {
  //   if (index > jobs.totalPage) {
  //     index = jobs.currentPage;
  //   }
  //   setPage(index);
  // }

  useEffect(() => {
    if (jobs.currentPage !== 1) {
      dispatch(fetchJobs(searchParams));
    } else {
      dispatch(fetchMoreJobs(page));
    }
    setLoadingInfiniteScroll(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleScroll = () => {
    let height = document.documentElement.scrollHeight;
    let top = document.documentElement.scrollTop;
    let windowHeight = window.innerHeight;

    if (page !== jobs.totalPage) {
      if (windowHeight + top + 1 >= height) {
        setLoadingInfiniteScroll(true);
        setPage((prevPage) => {
          if (page === jobs.totalPage) {
            return jobs.totalPage;
          }
          return prevPage + 1;
        });
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  if (loading) {
    return <Loading />;
  }

  if (loadingInfiniteScroll) {
    return <Loading />;
  }

  return (
    <section className="bg-[#f7faff]">
      <div className="flex-cols py-4 pt-8 pr-60 pl-64 text-left">
        <div className="py-12 pt-24">
          <form onSubmit={handleSubmit} className="flex flex-row">
            <input
              type="text"
              value={searchParams.search}
              name="search"
              onChange={handleChange}
              className="w-full form-control block px-4 py-2 mb-2 md:mb-0 md:mr-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:bg-[#1b83dd]-blue-600 focus:outline-none"
              placeholder="Search for a job title"
            />
            <button
              type="submit"
              className="p-2.5 px-4 text-md font-medium text-white bg-[#0086FF] rounded-md border border-[#1b83dd] hover:bg-[#1b83dd] focus:ring-4 focus:outline-none focus:ring-[#1b83dd]"
            >
              Search
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
        <div>
          {jobs?.rows?.map((job, index) => {
            return <JobListRow key={index} job={job} />;
          })}
        </div>
      </div>
      {/* Pagination */}
      {/* <div className="justify-center flex-1 px-4 py-6 pb-24">
        <div className="flex justify-center">
          <ul className="flex items-center justify-center space-x-1">
            <li>
              {jobs.currentPage > 1 ? (
                <button
                  onClick={() => {
                    handleChangePage(jobs.currentPage - 1);
                  }}
                  className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 rounded hover:text-blue-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </button>
              ) : (
                <div className="w-16 h-16"></div>
              )}
            </li>

             {Array.apply(null, { length: jobs.totalPage }).map((e, i) =>
              jobs.currentPage === i + 1 ? (
                <li key={i}>
                  <button
                    onClick={() => {
                      handleChangePage(i + 1);
                    }}
                    className="px-4 py-2 text-blue-600 border border-blue-600 rounded bg-blue-50 hover:bg-blue-400 hover:text-white"
                  >
                    {i + 1}
                  </button>
                </li>
              ) : (
                <li key={i}>
                  <button
                    onClick={() => {
                      handleChangePage(i + 1);
                    }}
                    className="px-4 py-2 text-gray-600 border border-gray-500 rounded hover:bg-blue-400 hover:text-white"
                  >
                    {i + 1}
                  </button>
                </li>
              )
            )}
            <li className="w-12">
              {jobs.currentPage !== jobs.totalPage ? (
                <button
                  onClick={() => {
                    handleChangePage(jobs.currentPage + 1);
                  }}
                  className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 ml-2 bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              ) : (
                <div className="w-16 h-16"></div>
              )}
            </li>
          </ul>
        </div>
      </div> */}
    </section>
  );
}
