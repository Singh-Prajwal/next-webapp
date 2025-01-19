"use client";

import { useState } from "react";
import { companies } from "../data";
import CompanyList from "../components/companyList";
import CompanyDetails from "../components/companyDetails";
import { Company } from "@/types";

export default function HomePage() {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const handleSelect = (id: number) => {
    const company = companies.find((comp) => comp.id === id) || null;
    setSelectedCompany(company);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50 text-black">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-xl font-bold text-center">My Company Directory</h1>
      </header>
      {companies?.length > 0 ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Company Directory</h1>
          <div className="grid md:grid-cols-3 gap-4">
            <CompanyList companies={companies} onSelect={handleSelect} />
            <CompanyDetails company={selectedCompany} />
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>
          &copy; {new Date().getFullYear()} My Company Directory. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
