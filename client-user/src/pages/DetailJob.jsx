import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SkillList from "../components/SkillList.jsx";
import { fetchDetailJob } from "../store/actions/jobsAction";
import Loading from "../components/Loading.jsx";

export default function DetailJob() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { detailJob, loading } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchDetailJob(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="bg-[#f7faff]">
      <div className="pr-60 pl-64 pb-12 pt-8">
        <div className="border bg-white rounded-md">
          <div className="w-full h-96 bg-detailBanner bg-cover"></div>
          <div className="container p-4 px-8 mx-auto text-left pb-8">
            <img
              className="flex items-start p-4 mt-4 rounded-sm border object-cover bg-white"
              src={detailJob?.Company?.companyLogo}
              alt=""
            />
            <h2 className="text-4xl font-bold pt-4 text-gray-800">
              {detailJob?.title}
            </h2>
            <p className="text-regular font-medium pt-2 text-[#0086FF]">
              {detailJob?.Company?.name}
            </p>
            <p className="text-regular font-regular py-1 pb-3 text-gray-800">
              {detailJob?.Company?.location} &#183;
              <span> {detailJob?.jobType}</span>
            </p>
            <div className="w-full flex flex-start">
              <button
                type="button"
                className="items-start inline-block px-6 py-2.5 bg-[#0086FF] text-white font-semibold text-md rounded shadow-md hover:bg-[#1b83dd] hover:shadow-lg focus:bg-[#1b83dd] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#1b83dd] active:shadow-lg transition duration-150 ease-in-out"
              >
                Apply Now
              </button>
            </div>
            <hr className="my-8 h-px bg-gray-200 border-0"></hr>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Job Description
              </h2>
              <p className="text-md font-regular text-gray-800 pt-2">
                {detailJob.description}
              </p>
            </div>
            <div className="pt-8">
              <h2 className="text-2xl font-bold text-gray-800">
                Minimum Skills
              </h2>

              <ul className="space-y-1 list-disc list-inside text-gray-800 pt-2 pl-2">
                {detailJob?.Skills?.map((skill) => {
                  return <SkillList key={skill.id} skill={skill} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
