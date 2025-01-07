"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch"; // Assuming a Switch component for toggles
import { useRouter } from "next/navigation";

const AdditionalDetailsForm = () => {
  const [coverForAllEmployees, setCoverForAllEmployees] = useState(false);
  const [offshoreActivities, setOffshoreActivities] = useState(false);
  const [oilGasSector, setOilGasSector] = useState(false);
  const [claimsInPast, setClaimsInPast] = useState(false);
  const [previousApplicationDeclined, setPreviousApplicationDeclined] = useState(false);

  const [offshoreDetails, setOffshoreDetails] = useState("");
  const [oilGasDetails, setOilGasDetails] = useState("");
  const [claimsDetails, setClaimsDetails] = useState("");
  const [previousApplicationDetails, setPreviousApplicationDetails] = useState("");

  const router = useRouter();

  const handleNextClick = () => {
    router.push("/pages/nextPage"); // Adjust the page route as needed
  };

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow p-6 flex flex-col gap-y-5">
      <h1 className="font-bold text-3xl capitalize">Additional Details</h1>

      {/* Cover obtained for all Employees */}
      <div className="flex flex-col gap-y-2">
        <label className="font-medium">Is the Cover obtained for all Employees?</label>
        <div className="flex items-center gap-x-4">
          <Switch checked={coverForAllEmployees} onCheckedChange={setCoverForAllEmployees} />
          {coverForAllEmployees && (
            <Input
              type="text"
              placeholder="If no, give details"
              value={offshoreDetails}
              onChange={(e) => setOffshoreDetails(e.target.value)}
              className="w-full"
            />
          )}
        </div>
      </div>

      {/* Offshore Activities */}
      <div className="flex flex-col gap-y-2">
        <label className="font-medium">Is any of the employees engaged in offshore activities?</label>
        <div className="flex items-center gap-x-4">
          <Switch checked={offshoreActivities} onCheckedChange={setOffshoreActivities} />
          {offshoreActivities && (
            <Input
              type="text"
              placeholder="If yes, please give details"
              value={offshoreDetails}
              onChange={(e) => setOffshoreDetails(e.target.value)}
              className="w-full"
            />
          )}
        </div>
      </div>

      {/* Oil and Gas Sector Activities */}
      <div className="flex flex-col gap-y-2">
        <label className="font-medium">Is any of your employees engaged in oil and gas sector activities?</label>
        <div className="flex items-center gap-x-4">
          <Switch checked={oilGasSector} onCheckedChange={setOilGasSector} />
          {oilGasSector && (
            <Input
              type="text"
              placeholder="If yes, please give details"
              value={oilGasDetails}
              onChange={(e) => setOilGasDetails(e.target.value)}
              className="w-full"
            />
          )}
        </div>
      </div>

      {/* Claims in Past 3 Years */}
      <div className="flex flex-col gap-y-2">
        <label className="font-medium">Did you have any claims in the past 3 years?</label>
        <div className="flex items-center gap-x-4">
          <Switch checked={claimsInPast} onCheckedChange={setClaimsInPast} />
          {claimsInPast && (
            <Input
              type="text"
              placeholder="If yes, please give details"
              value={claimsDetails}
              onChange={(e) => setClaimsDetails(e.target.value)}
              className="w-full"
            />
          )}
        </div>
      </div>

      {/* Previous Application Declined */}
      <div className="flex flex-col gap-y-2">
        <label className="font-medium">Has a previous application been declined?</label>
        <div className="flex items-center gap-x-4">
          <Switch checked={previousApplicationDeclined} onCheckedChange={setPreviousApplicationDeclined} />
          {previousApplicationDeclined && (
            <Input
              type="text"
              placeholder="If yes, please give details"
              value={previousApplicationDetails}
              onChange={(e) => setPreviousApplicationDetails(e.target.value)}
              className="w-full"
            />
          )}
        </div>
      </div>

      {/* Next Button */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleNextClick}
          className="flex items-center px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800"
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

export default AdditionalDetailsForm;
