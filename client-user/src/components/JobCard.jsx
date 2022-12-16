import { useNavigate } from "react-router-dom";

export default function JobCard({ job }) {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full">
      <div className="rounded-lg border bg-white pt-4 h-full flex flex-col justify-between">
        <div
          onClick={(e) => {
            e.preventDefault();
            navigate(`jobs/${job.id}`);
          }}
        >
          <img
            className="flex items-start text-left p-4 rounded-lg border-black object-cover mx-6 bg-white drop-shadow-md"
            src={job?.Company?.companyLogo}
            alt="company-logo"
          />
          <div className="px-6 pt-6">
            <h2
              onClick={(e) => {
                e.preventDefault();
                navigate(`jobs/${job.id}`);
              }}
              className="text-gray-900 text-2xl font-semibold mb-1 text-left hover:underline hover:underline-offset-6"
            >
              {job.title}
            </h2>
            <h5 className="text-[#1b83dd] text-xl mb-1 font-medium text-left">
              {job?.Company?.name}
            </h5>
            <p className="text-gray-700 text-left mb-4">
              {job?.Company?.location}
            </p>
          </div>
        </div>
        <div className="p-6 w-full flex flex-start">
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate(`jobs/${job.id}`);
            }}
            type="button"
            className="items-start inline-block px-6 py-2.5 bg-[#0086FF] text-white font-semibold text-md rounded shadow-md hover:bg-[#1b83dd] hover:shadow-lg focus:bg-[#1b83dd] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#1b83dd] active:shadow-lg transition duration-150 ease-in-out"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
<div className="flex pb-12 mx-44">
  <div className="max-w-6xl py-4 lg:py-0">
    <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3"></div>
  </div>
</div>;
