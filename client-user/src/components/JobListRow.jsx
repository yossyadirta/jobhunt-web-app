import { Link } from "react-router-dom";

export default function JobListRow({ job }) {
  return (
    <div className="p-4 border rounded-sm bg-white">
      <div className="flex flex-row items-center">
        <div className="pr-4">
          <img
            src={job.Company.companyLogo}
            className="object-cover"
            alt="logo"
          />
        </div>
        <div>
          <Link to={`${job.id}`}>
            <h2 className="text-2xl font-semibold text-[#0086FF] hover:underline hover:underline-offset-4">
              {job.title}
            </h2>
          </Link>
          <p className="inline-block mb-2 text-md font-semibold text-gray-800 hover:text-blue-600 mt-2">
            {job.Company.name}
          </p>

          <div className="flex flex-wrap items-center mb-4 ">
            <div className="flex items-center mb-2 mr-4 text-sm text-gray-600 md:mb-0 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="w-4 h-4 mr-1 bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <p className="pl-1">{job.Company.location}</p>
            </div>
            <div className="flex items-center mb-2 mr-4 text-sm text-gray-600 md:mb-0 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="w-4 h-4 mr-1 bi bi-calendar"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>
              <p className="pl-1">{job.jobType}</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-1 text-sm text-gray-500 line-clamp-2">
        {job.description}
      </p>
    </div>
  );
}
