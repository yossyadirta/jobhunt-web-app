import FormEditCompany from "../components/FormEditCompany";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailCompany } from "../store/actions/companiesAction";
import Loading from "../components/Loading";

export default function EditCompany() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { detailCompany, loading } = useSelector((state) => state.companies);

  useEffect(() => {
    dispatch(fetchDetailCompany(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="pt-16">
      <main className="flex-1 max-h-full p-5 overflow-hidden overflow-y-hidden">
        <FormEditCompany detailCompany={detailCompany} />
      </main>
    </section>
  );
}
