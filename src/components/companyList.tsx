"use client";

import { Company } from "@/types";

type Props = {
  companies: Company[];
  onSelect: (id: number) => void;
};

export default function CompanyList({ companies, onSelect }: Props) {
  return (
    <div className="space-y-4">
      {companies.map((company) => (
        <button
          key={company.id}
          className="block w-full text-left p-4 bg-blue-100  rounded-xl bg-white shadow-md hover:bg-indigo-50 hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => onSelect(company.id)}
        >
          <div className="text-xl font-semibold  text-gray-800">
            {company.name}
          </div>
          <div className="text-sm text-gray-600 mt-1">Click to select</div>
        </button>
      ))}
    </div>
  );
}
