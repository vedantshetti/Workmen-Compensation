"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation"; // For navigation

const LimitOfLiabilityForm = () => {
  const [medicalExpensesLimit, setMedicalExpensesLimit] = useState("");
  const [repatriationExpensesLimit, setRepatriationExpensesLimit] =
    useState("");
  const [elLimitCurrency, setElLimitCurrency] = useState("UAE Dirhams");
  const [employersLiabilityLimit, setEmployersLiabilityLimit] = useState("");
  const [increasedDeathBenefit, setIncreasedDeathBenefit] = useState("");

  const router = useRouter(); // Initialize the Next.js router

  const handleNextClick = () => {
    router.push("/pages/additionalDetails"); // Navigate to the additional details page
  };

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow p-6 flex flex-col gap-y-5">
      <h1 className="font-bold text-3xl capitalize">Limit of Liability</h1>

      {/* Medical Expenses Limit */}
      <div className="flex flex-col gap-y-2">
        <label className="font-medium">Medical Expenses Limit (in AED)</label>
        <Select
          value={medicalExpensesLimit}
          onValueChange={setMedicalExpensesLimit}
        >
          <SelectTrigger className="w-full text-gray-500">
            <SelectValue placeholder="Select limit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="15000">15000</SelectItem>
            <SelectItem value="20000">20000</SelectItem>
            <SelectItem value="30000">30000</SelectItem>
            <SelectItem value="40000">40000</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Repatriation Expenses Limit */}
      <div className="flex flex-col gap-y-2">
        <label className="font-medium">
          Repatriation Expenses Limit (in AED)
        </label>
        <Select
          value={repatriationExpensesLimit}
          onValueChange={setRepatriationExpensesLimit}
        >
          <SelectTrigger className="w-full text-gray-500">
            <SelectValue placeholder="Select limit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="15000">15000</SelectItem>
            <SelectItem value="20000">20000</SelectItem>
            <SelectItem value="30000">30000</SelectItem>
            <SelectItem value="40000">40000</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* EL Limit Currency */}
      <div className="flex flex-col gap-y-2">
        <label className="font-medium">EL Limit Currency</label>
        <Select value={elLimitCurrency} onValueChange={setElLimitCurrency}>
          <SelectTrigger className="w-full text-gray-500">
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="UAE Dirhams">UAE Dirhams</SelectItem>
            <SelectItem value="US Dollar">US Dollar</SelectItem>
            <SelectItem value="Euro">Euro</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Employers Liability Limit */}
      <div className="flex flex-col gap-y-2">
        <label className="font-medium">
          Employers Liability Limit (in AED)
        </label>
        <Select
          value={employersLiabilityLimit}
          onValueChange={setEmployersLiabilityLimit}
        >
          <SelectTrigger className="w-full text-gray-500">
            <SelectValue placeholder="Select limit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="50000">50000</SelectItem>
            <SelectItem value="100000">100000</SelectItem>
            <SelectItem value="200000">200000</SelectItem>
            <SelectItem value="300000">300000</SelectItem>
            <SelectItem value="400000">400000</SelectItem>
            <SelectItem value="18365000">18,365,000</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Increased Death Benefit */}
      <div className="flex flex-col gap-y-2">
        <label className="font-medium">Increased Death Benefit (in AED)</label>
        <Select
          value={increasedDeathBenefit}
          onValueChange={setIncreasedDeathBenefit}
        >
          <SelectTrigger className="w-full text-gray-500">
            <SelectValue placeholder="Select limit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="50000">50000</SelectItem>
            <SelectItem value="100000">100000</SelectItem>
            <SelectItem value="150000">150000</SelectItem>
            <SelectItem value="200000">200000</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Employee Details Form */}
      <div className="mt-6">
        <h2 className="font-bold text-xl">Employee Details</h2>
        <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-3 lg:gap-x-5">
          {/* Category of Employees */}
          <div className="flex flex-col gap-y-2">
            <label className="font-medium">Category of Employees</label>
            <Select>
              <SelectTrigger className="w-full text-gray-500">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="management">Management</SelectItem>
                <SelectItem value="administration">Administration</SelectItem>
                <SelectItem value="clerical-staff">Clerical Staff</SelectItem>
                <SelectItem value="engineers">Engineers</SelectItem>
                <SelectItem value="manual-labourers">
                  Manual Labourers
                </SelectItem>
                <SelectItem value="drivers">Drivers</SelectItem>
                <SelectItem value="other-white-collar">
                  Other - White Collar
                </SelectItem>
                <SelectItem value="other-blue-collar">
                  Other - Blue Collar
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* No of Employees */}
          <div className="flex flex-col gap-y-2">
            <label className="font-medium">No of Employees</label>
            <Input
              type="number"
              min="1"
              placeholder="Enter number of employees"
              onInput={(e) => {
                // Ensuring that the value cannot be less than 1
                if (parseInt(e.target.value) < 1) {
                  e.target.value = 1; // Set to 1 if user tries to input a value less than 1
                }
              }}
            />
          </div>

          {/* Estimated Wages for the Period (in AED) */}
          <div className="flex flex-col gap-y-2">
            <label className="font-medium">
              Estimated Wages for the Period (in AED)
            </label>
            <Input type="number" placeholder="Enter estimated wages" />
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleNextClick}
          className="flex w-full lg:w-full px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 justify-center lg:text-center items-center"
        >
          <span className="lg:text-center">Next</span>
          <span className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default LimitOfLiabilityForm;
