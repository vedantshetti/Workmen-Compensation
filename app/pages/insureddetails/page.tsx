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
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"; // Importing Popover

const InsuredDetailsForm = () => {
  const [policyStartDate, setPolicyStartDate] = useState(addDays(new Date(), 1));
  const [policyEndDate, setPolicyEndDate] = useState(
    addYears(addDays(new Date(), 1), 1)
  );
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handlePolicyStartChange = (date: Date) => {
    setPolicyStartDate(date);
    setPolicyEndDate(addYears(date, 1));
    setIsPopoverOpen(false); // Close the calendar popover after selecting the date
  };

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow p-6 flex flex-col gap-y-5">
      <h1 className="font-bold text-3xl capitalize">Insured Details</h1>

      {/* Form Grid */}
      <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-x-5">
        {/* Insured Name */}
        <div className="flex flex-col gap-y-2">
          <label className="font-medium">Insured Name</label>
          <Input placeholder="Enter insured name" />
        </div>

        {/* Emirates */}
        <div className="flex flex-col gap-y-2">
          <label className="font-medium">Emirates</label>
          <Input placeholder="Enter emirates" />
        </div>

        {/* Business Sector */}
        <div className="flex flex-col gap-y-2">
          <label className="font-medium">Business Sector</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select business sector" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="construction">Construction</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Business Activity */}
        <div className="flex flex-col gap-y-2">
          <label className="font-medium">Business Activity</label>
          <Input placeholder="Enter business activity" />
        </div>

        {/* Law/Jurisdiction */}
        <div className="flex flex-col gap-y-2">
          <label className="font-medium">Law/Jurisdiction</label>
          <Select>
            <SelectTrigger className="w-full">
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
          <Input placeholder="Enter trade license number" />
        </div>

        {/* Policy Dates */}
        <div className="flex flex-col gap-y-2">
          <label className="font-medium">Policy From</label>
          <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger asChild>
              <Input
                placeholder="Select policy start date"
                value={format(policyStartDate, "yyyy-MM-dd")}
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
          <label className="font-medium">Policy To</label>
          <Input
            value={format(policyEndDate, "yyyy-MM-dd")}
            readOnly
            className="text-gray-500"
          />
        </div>

        {/* Number of Employees */}
        <div className="flex flex-col gap-y-2">
          <label className="font-medium">Number of Employees</label>
          <Input type="number" placeholder="Enter number of employees" />
        </div>

        {/* Basis of Wages */}
        <div className="flex flex-col gap-y-2">
          <label className="font-medium">Basis of Wages</label>
          <Input placeholder="Enter basis of wages" />
        </div>
      </div>
    </div>
  );
};

export default InsuredDetailsForm;
