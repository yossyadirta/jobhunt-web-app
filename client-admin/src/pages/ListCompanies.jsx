import { useEffect } from "react";
import { fetchCompanies } from "../store/actions/companiesAction";
import { useSelector, useDispatch } from "react-redux";
import TableCompaniesRow from "../components/TableCompaniesRow";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

export default function ListCompanies() {
  const { companies, loading } = useSelector((state) => state.companies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanies());
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
            <h1 className="text-3xl font-bold whitespace-nowrap">Companies</h1>
          </div>
          <Link
            to="add"
            type="button"
            className="bg-[#006DFF]  text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-[#1662c7]  focus:outline-none focus:shadow-outline"
          >
            <span> + New Company </span>
          </Link>
        </div>
        <div className="flex flex-col mt-6 border rounded-lg">
          <div className="overflow-x-auto relative sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 bg-white">
              <thead className="text-sm text-white bg-blue-500">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    #
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Logo
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Location
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Email
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Description
                  </th>
                  <th scope="col" className="py-3 px-6"></th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company, index) => {
                  return (
                    <TableCompaniesRow
                      key={company.id}
                      company={company}
                      index={index}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </section>
  );
}
