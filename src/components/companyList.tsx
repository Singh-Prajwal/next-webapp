"use client";

import { Company } from "@/types";

type Props = {
  companies: Company[];
  onSelect: (id: number) => void;
};

export default function CompanyList({ companies, onSelect }: Props) {
  return (
    <div className="space-y-2">
      {companies.map((company) => (
        <button
          key={company.id}
          className="block w-full text-left p-2 rounded bg-gray-100 hover:bg-gray-200"
          onClick={() => onSelect(company.id)}
        >
          {company.name}
        </button>
      ))}
    </div>
  );
}
