"use client";

import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; // Assuming you have RadioGroup components
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const AdditionalDetailsForm = () => {
  const [coverForAllEmployees, setCoverForAllEmployees] = useState("yes");
  const [offshoreActivities, setOffshoreActivities] = useState("no");
  const [oilGasSector, setOilGasSector] = useState("no");
  const [claimsInPast, setClaimsInPast] = useState("no");
  const [previousApplicationDeclined, setPreviousApplicationDeclined] =
    useState("no");

  const [offshoreDetails, setOffshoreDetails] = useState("");
  const [oilGasDetails, setOilGasDetails] = useState("");
  const [claimsDetails, setClaimsDetails] = useState("");
  const [previousApplicationDetails, setPreviousApplicationDetails] =
    useState("");

  const router = useRouter();

  const handleNextClick = () => {
    router.push("/pages/nextPage"); // Adjust the page route as needed
  };

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow p-6 flex flex-col gap-y-5">
      <h1 className="font-bold text-3xl capitalize">Additional Details</h1>

      {/* Cover obtained for all Employees */}
      <div className="flex flex-col gap-y-2">
        <label className="font-medium">
          Is the Cover obtained for all Employees?
        </label>
        <RadioGroup
          value={coverForAllEmployees}
          onValueChange={setCoverForAllEmployees}
        >
          <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-x-2">
              <RadioGroupItem
                value="yes"
                id="coverYes"
                className={`radio-custom-size ${
                  coverForAllEmployees === "yes" ? "bg-gray-800 text-white" : ""
                }`}
              />
              <span>Yes</span>
            </div>
            <div className="flex items-center gap-x-2">
              <RadioGroupItem
                value="no"
                id="coverNo"
                className={`radio-custom-size ${
                  coverForAllEmployees === "no" ? "bg-gray-800 text-white" : ""
                }`}
              />
              <span>No</span>
            </div>
          </div>
        </RadioGroup>
        {coverForAllEmployees === "no" && (
          <Input
            type="text"
            placeholder="If no, give details"
            value={offshoreDetails}
            onChange={(e) => setOffshoreDetails(e.target.value)}
            className="w-full"
          />
        )}
      </div>

      {/* Offshore Activities */}
      <div className="flex flex-col gap-y-2">
        <label className="font-medium">
          Is any of the employees engaged in offshore activities?
        </label>
        <RadioGroup
          value={offshoreActivities}
          onValueChange={setOffshoreActivities}
        >
          <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-x-2">
              <RadioGroupItem
                value="yes"
                id="offshoreYes"
                className={`radio-custom-size ${
                  offshoreActivities === "yes" ? "bg-gray-800 text-white" : ""
                }`}
              />
              <span>Yes</span>
            </div>
            <div className="flex items-center gap-x-2">
              <RadioGroupItem
                value="no"
                id="offshoreNo"
                className={`radio-custom-size ${
                  offshoreActivities === "no" ? "bg-gray-800 text-white" : ""
                }`}
              />
              <span>No</span>
            </div>
          </div>
        </RadioGroup>
        {offshoreActivities === "yes" && (
          <Input
            type="text"
            placeholder="If yes, please give details"
            value={offshoreDetails}
            onChange={(e) => setOffshoreDetails(e.target.value)}
            className="w-full"
          />
        )}
      </div>

      {/* Oil and Gas Sector Activities */}
      <div className="flex flex-col gap-y-2">
        <label className="font-medium">
          Is any of your employees engaged in oil and gas sector activities?
        </label>
        <RadioGroup value={oilGasSector} onValueChange={setOilGasSector}>
          <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-x-2">
              <RadioGroupItem
                value="yes"
                id="oilGasYes"
                className={`radio-custom-size ${
                  oilGasSector === "yes" ? "bg-gray-800 text-white" : ""
                }`}
              />
              <span>Yes</span>
            </div>
            <div className="flex items-center gap-x-2">
              <RadioGroupItem
                value="no"
                id="oilGasNo"
                className={`radio-custom-size ${
                  oilGasSector === "no" ? "bg-gray-800 text-white" : ""
                }`}
              />
              <span>No</span>
            </div>
          </div>
        </RadioGroup>
        {oilGasSector === "yes" && (
          <Input
            type="text"
            placeholder="If yes, please give details"
            value={oilGasDetails}
            onChange={(e) => setOilGasDetails(e.target.value)}
            className="w-full"
          />
        )}
      </div>

      {/* Claims in Past 3 Years */}
      <div className="flex flex-col gap-y-2">
        <label className="font-medium">
          Did you have any claims in the past 3 years?
        </label>
        <RadioGroup value={claimsInPast} onValueChange={setClaimsInPast}>
          <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-x-2">
              <RadioGroupItem
                value="yes"
                id="claimsYes"
                className={`radio-custom-size ${
                  claimsInPast === "yes" ? "bg-gray-800 text-white" : ""
                }`}
              />
              <span>Yes</span>
            </div>
            <div className="flex items-center gap-x-2">
              <RadioGroupItem
                value="no"
                id="claimsNo"
                className={`radio-custom-size ${
                  claimsInPast === "no" ? "bg-gray-800 text-white" : ""
                }`}
              />
              <span>No</span>
            </div>
          </div>
        </RadioGroup>
        {claimsInPast === "yes" && (
          <Input
            type="text"
            placeholder="If yes, please give details"
            value={claimsDetails}
            onChange={(e) => setClaimsDetails(e.target.value)}
            className="w-full"
          />
        )}
      </div>

      {/* Previous Application Declined */}
      <div className="flex flex-col gap-y-2">
        <label className="font-medium">
          Has a previous application been declined?
        </label>
        <RadioGroup
          value={previousApplicationDeclined}
          onValueChange={setPreviousApplicationDeclined}
        >
          <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-x-2">
              <RadioGroupItem
                value="yes"
                id="applicationDeclinedYes"
                className={`radio-custom-size ${
                  previousApplicationDeclined === "yes"
                    ? "bg-gray-800 text-white"
                    : ""
                }`}
              />
              <span>Yes</span>
            </div>
            <div className="flex items-center gap-x-2">
              <RadioGroupItem
                value="no"
                id="applicationDeclinedNo"
                className={`radio-custom-size ${
                  previousApplicationDeclined === "no"
                    ? "bg-gray-800 text-white"
                    : ""
                }`}
              />
              <span>No</span>
            </div>
          </div>
        </RadioGroup>
        {previousApplicationDeclined === "yes" && (
          <Input
            type="text"
            placeholder="If yes, please give details"
            value={previousApplicationDetails}
            onChange={(e) => setPreviousApplicationDetails(e.target.value)}
            className="w-full"
          />
        )}
      </div>

      {/* Next Button */}
      {/* Next Button */}
      {/* Next Button */}
      {/* Next Button */}
      <div className="mt-6 flex justify-end w-full">
        <button
          onClick={handleNextClick}
          className="flex items-center justify-center px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 w-full lg:w-screen max-w-screen-3xl mx-auto"
        >
          <div className="flex items-center gap-x-2">
            <span>Next</span>
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
          </div>
        </button>
      </div>
    </div>
  );
};

export default AdditionalDetailsForm;
