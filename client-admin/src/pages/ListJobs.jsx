import { useEffect } from "react";
import { fetchJobs } from "../store/actions/jobsAction";
import { useSelector, useDispatch } from "react-redux";
import TableJobsRow from "../components/TableJobsRow";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

export default function ListJobs() {
  const { jobs, loading } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="pt-16">
      <main className="flex-1 max-h-full p-5 overflow-y-hidden">
        <div className="flex justify-between">
          <div className="flex flex-col items-start justify-between space-y-4 lg:items-center lg:space-y-0 lg:flex-row">
            <h1 className="text-3xl font-bold whitespace-nowrap">Jobs</h1>
          </div>
          <Link
            to="/jobs/add"
            type="button"
            className="bg-[#006DFF]  text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-[#1662c7]  focus:outline-none focus:shadow-outline"
          >
            <span> + New Job </span>
          </Link>
        </div>
        <div className="flex flex-col mt-6 border rounded-lg">
          <div className="overflow-x-auto relative sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 bg-white">
              <thead className="text-sm text-white bg-blue-500">
                <tr>
                  <th scope="col" className="py-3 px-4">
                    #
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Title
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Description
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Company
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Author
                  </th>
                  <th scope="col" className="py-3 px-6 w-28">
                    Job Type
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Skills
                  </th>
                  <th scope="col" className="py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, index) => {
                  return <TableJobsRow key={job.id} job={job} index={index} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </section>
  );
}
