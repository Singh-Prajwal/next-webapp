import { Company } from "@/types";

type Props = {
  company: Company | null;
};

export default function CompanyDetails({ company }: Props) {
  if (!company)
    return <p className="text-gray-500">Select a company to view details.</p>;

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold">{company.name}</h2>
      <p>{company.details}</p>
      <h3 className="mt-4 font-semibold">Directors:</h3>
      <ul className="list-disc list-inside">
        {company.directors.map((director) => (
          <li key={director}>{director}</li>
        ))}
      </ul>
    </div>
  );
}
