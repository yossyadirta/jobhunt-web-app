import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCompany } from "../store/actions/companiesAction";

export default function TableCompaniesRow({ company, index }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteCompany(id));
  };

  return (
    <tr className="bg-white border-b">
      <td className="py-4 px-6">{index + 1}</td>
      <td className="py-4 px-6">{company.name}</td>
      <td className="py-4 w-40">
        <img
          src={company.companyLogo}
          alt="company logo"
          className="w-28 h-16 object-cover"
        />
      </td>
      <td className="py-4 px-6 w-40">{company.location}</td>
      <td className="py-4 px-6">{company.email}</td>
      <td className="py-4 px-6 line-clamp-2 items-center">
        {company.description}
      </td>
      <td className="py-4">
        <div className="py-4 px-6 flex flex-row items-center flex-center h-full">
          <button
            onClick={() => {
              navigate(`edit/${company.id}`);
            }}
            className="font-medium text-blue-600 hover:underline mr-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
            </svg>
          </button>
          <button
            onClick={() => {
              handleDelete(company.id);
            }}
            className="font-medium text-red-600 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}
