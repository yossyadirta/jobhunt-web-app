export default function CompanyBrand({ company }) {
  return (
    <div className="flex justify-center w-1/2 p-4 align-middle md:w-1/2 xl:w-1/4">
      <img
        src={company.companyLogo}
        className="w-36 h-32 object-contain"
        alt="company logo"
      />
    </div>
  );
}
