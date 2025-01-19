"use client";

import { useState } from "react";
import { companies } from "../data";
import CompanyList from "../components/companyList";
import CompanyDetails from "../components/companyDetails";
import { Company } from "@/types";
import Image from "next/image";

export default function HomePage() {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const handleSelect = (id: number) => {
    const company = companies.find((comp) => comp.id === id) || null;
    setSelectedCompany(company);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-black">
      {/* Header */}
      <header className="bg-blue-100 text-black p-4 shadow-md sticky top-0 z-10 flex justify-start content-center">
        <Image
          className={"ms-5"}
          src={"/logo.png"}
          width={110}
          height={50}
          alt={"logo"}
        />
        {/* <h1 className="text-xl ms-2 font-bold text-center content-center">
          My Company Directory
        </h1> */}
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        {companies?.length > 0 ? (
          <>
            <h1 className="text-2xl font-bold mb-4">Company Directory</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Company List as Cards */}
              <div className="space-y-4">
                <CompanyList companies={companies} onSelect={handleSelect} />
              </div>

              {/* Company Details */}
              <div className="col-span-1 md:col-span-2">
                <CompanyDetails company={selectedCompany} />
              </div>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-600 text-white text-center py-4 sticky bottom-0 mt-auto">
        <p>
          &copy; {new Date().getFullYear()} My Company Directory. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
