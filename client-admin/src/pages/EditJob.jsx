import FormEditJob from "../components/FormEditJob";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { fetchDetailJob } from "../store/actions/jobsAction";

export default function EditJob() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { detailJob, skills, loading } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchDetailJob(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="pt-16">
      <main className="flex-1 max-h-full p-5 overflow-hidden overflow-y-hidden">
        <FormEditJob detailJob={detailJob} skills={skills} />
      </main>
    </section>
  );
}
