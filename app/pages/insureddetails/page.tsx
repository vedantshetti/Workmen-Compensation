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
import { Calendar } from "@/components/ui/calendar";
import { format, addDays, addYears } from "date-fns";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"; // Importing Popover
import { useRouter } from "next/navigation"; // For navigatio

const InsuredDetailsForm = () => {
  const [policyStartDate, setPolicyStartDate] = useState(
    addDays(new Date(), 1)
  );
  const [policyEndDate, setPolicyEndDate] = useState(
    addYears(addDays(new Date(), 1), 1)
  );
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [numEmployees, setNumEmployees] = useState(""); // State for employees

  const router = useRouter(); // Initialize the Next.js router

  const handlePolicyStartChange = (date: Date) => {
    setPolicyStartDate(date);
    setPolicyEndDate(addYears(date, 1));
    setIsPopoverOpen(false); // Close the calendar popover after selecting the date
  };

  const handleNextClick = () => {
    router.push("/pages/liability"); // Navigate to the liability page
  };

  const handleNumEmployeesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setNumEmployees(
        value === "" ? "" : Math.max(Number(value), 1).toString()
      );
    }
  };

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow p-6 flex flex-col gap-y-5">
      <h1 className="font-bold text-3xl capitalize">Insured Details</h1>

      {/* Form Grid */}
      <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-x-5">
        {/* Insured Name */}
        <div className="flex flex-col gap-y-2">
          <label className="font-medium">Insured Name</label>
          <Input
            className="placeholder-gray-500"
            placeholder="Enter insured name"
          />
        </div>

        {/* Emirates */}
        {/* Emirates */}
        <div className="flex flex-col gap-y-2">
          <label className="font-medium">Emirates</label>
          <Select>
            <SelectTrigger className="w-full text-gray-500">
              <SelectValue placeholder="Select emirates" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="abu-dhabi">Abu Dhabi</SelectItem>
              <SelectItem value="ajman">Ajman</SelectItem>
              <SelectItem value="dubai">Dubai</SelectItem>
              <SelectItem value="fujairah">Fujairah</SelectItem>
              <SelectItem value="other">Other</SelectItem>
              <SelectItem value="ras-al-khaimah">Ras Al Khaimah</SelectItem>
              <SelectItem value="sharjah">Sharjah</SelectItem>
              <SelectItem value="um-al-quwain">Um Al Quwain</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Country */}
        <div className="flex flex-col gap-y-2">
          <label className="font-medium">Country</label>
          <Select>
            <SelectTrigger className="w-full text-gray-500">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="uae">UAE</SelectItem>
              <SelectItem value="india">India</SelectItem>
              <SelectItem value="usa">USA</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="germany">Germany</SelectItem>
              <SelectItem value="australia">Australia</SelectItem>
              <SelectItem value="canada">Canada</SelectItem>
              <SelectItem value="france">France</SelectItem>
              <SelectItem value="italy">Italy</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Business Sector */}
        {/* Business Sector */}
        <div className="flex flex-col gap-y-2">
          <label className="font-medium">Business Sector</label>
          <Select>
            <SelectTrigger className="w-full text-gray-500">
              <div className="overflow-hidden">
                <SelectValue
                  placeholder="Select business sector"
                  className="scrolling-text"
                />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="airport-airline">
                Airport/Airline Ground Staff
              </SelectItem>
              <SelectItem value="computer-software">
                Computer/Software developers or administrators
              </SelectItem>
              <SelectItem value="education">
                Educational Institution - Schools / College / Universities
              </SelectItem>
              <SelectItem value="finance-insurance">
                Finance and Insurance
              </SelectItem>
              <SelectItem value="healthcare-social">
                Healthcare and Social Work Activities
              </SelectItem>
              <SelectItem value="media" className="break-words">
                Information and Communication - Newspaper, TV, Media etc
              </SelectItem>
              <SelectItem value="real-estate">
                Real Estate Administrators/agents
              </SelectItem>
              <SelectItem value="arts-entertainment">
                Arts, Entertainment and Recreation
              </SelectItem>
              <SelectItem value="construction">
                General Contracting and Civil Construction
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Business Activity */}
        <div className="flex flex-col gap-y-2">
          <label className="font-medium">Business Activity</label>
          <Input
            className="placeholder-gray-500"
            placeholder="Enter business activity as mentioned in trade license"
          />
        </div>

        {/* Law/Jurisdiction */}
        <div className="flex flex-col gap-y-2">
          <label className="font-medium">Law/Jurisdiction</label>
          <Select>
            <SelectTrigger className="w-full text-gray-500">
              <SelectValue placeholder="Select jurisdiction" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="uae">UAE</SelectItem>
              <SelectItem value="india">India</SelectItem>
              <SelectItem value="usa">USA</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="germany">Germany</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Trade License Number */}
        <div className="flex flex-col gap-y-2">
          <label className="font-medium">Trade License Number</label>
          <Input
            className="placeholder-gray-500"
            placeholder="Enter trade license number"
          />
        </div>

        {/* Policy Dates */}
        <div className="flex flex-col gap-y-2">
          <label className="font-medium">Policy Start Date</label>
          <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger asChild>
              <Input
                className="placeholder-gray-500 text-gray-500"
                placeholder="Select policy start date"
                value={
                  policyStartDate ? format(policyStartDate, "dd-MM-yyyy") : ""
                }
                onClick={() => setIsPopoverOpen(true)} // Open Popover when clicked
                readOnly
              />
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode="single"
                selected={policyStartDate}
                onSelect={handlePolicyStartChange}
                disabled={(date) => date < addDays(new Date(), 1)}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col gap-y-2">
          <label className="font-medium">Policy End Date</label>
          <Input
            className="placeholder-gray-500"
            value={format(policyEndDate, "yyyy-MM-dd")}
            readOnly
            className="text-gray-500"
          />
        </div>

        {/* Number of Employees */}
        <div className="flex flex-col gap-y-2">
          <label className="font-medium">Number of Employees</label>
          <Input
            className="placeholder-gray-500"
            type="number"
            placeholder="Enter number of employees"
            value={numEmployees}
            onChange={handleNumEmployeesChange}
          />
        </div>

        {/* Basis of Wages */}
        <div className="flex flex-col gap-y-2">
          <label className="font-medium">Basis of Wages</label>
          <Input
            className="placeholder-gray-500"
            placeholder="Enter basis of wages"
          />
        </div>
      </div>

      {/* Next Button */}
      {/* Next Button */}
      {/* Next Button */}
      {/* Next Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={handleNextClick}
          className="flex w-full lg:w-full px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 justify-center items-center"
        >
          Next
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

export default InsuredDetailsForm;
