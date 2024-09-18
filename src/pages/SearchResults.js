import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TextResultBox from "./components/TextResultBox";
import Card from "./components/Card";
import FilterBar from "./components/FilterBar";

function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query") || "No query provided";

  const [predictionResult, setPredictionResult] = useState("");
  const [similarCases, setSimilarCases] = useState([]);
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(
          "https://fastapixrailway-production.up.railway.app/ask",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ question: searchQuery }),
          }
        );

        if (!response.ok) {
          // throw new Error(HTTP error! Status: ${response.status});
          console.log("error!!!!");
        }

        const data = await response.json();
        console.log("API Response:", data); // Print API response to console

        if (data && data.Data) {
          setPredictionResult(data.Data.predictive_analysis || "");

          setSimilarCases(data.Data.similar_cases || []);
        } else {
          console.error("Data does not have the expected structure:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (searchQuery) {
      fetchResults();
    }
  }, [searchQuery]);

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed top-4 left-7 flex items-center space-x-2 z-10">
        <div className="text-xl font-bold text-gray-900">NyayDost</div>
      </div>

      <aside className="fixed z-2 top-16 left-6 w-64 p-1 bg-white">
        <FilterBar />
      </aside>

      <div className="ml-80 pl-0 pr-4">
        {/* Add SearchHeader component if it exists */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">
            Predictive Analysis on {searchQuery}
            {predictionResult
              ? predictionResult
              : "No predictive analysis available."}
          </h1>
        </div>

        <div className="relative z-12">
          <TextResultBox content={predictionResult} />
        </div>

        <div className="flex items-center justify-between mt-8">
          <h1 className="text-xl font-bold">Similar Cases</h1>
          <div className="relative inline-block">
            <select
              value={selectedOption}
              onChange={handleChange}
              className="p-2 w-48 border border-gray-300 rounded-md text-xs bg-white cursor-pointer appearance-none"
            >
              <option value="" disabled hidden>
                Sort
              </option>
              <option value="Recent">Recent</option>
              <option value="Most popular">Most popular</option>
              <option value="Alphabetical">Alphabetical</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <span className="text-xs text-gray-700">
                {selectedOption ? "▼" : "▼"}
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 mt-4">
          {similarCases.map((caseItem, index) => (
            <Card
              key={index}
              title={caseItem?.Case_name || "N/A"}
              date={caseItem?.Date || "N/A"}
              description={caseItem?.Decision || "No decision available"}
              link="" // Add a link if available
              caseno={caseItem?.case_details?.["Case No"] || "N/A"}
              court={caseItem?.case_details?.Court || "Unknown Court"}
              casestatus={caseItem?.case_details?.["Case Status"] || "N/A"}
              judge={caseItem?.case_details?.Judge || "Unknown Judge"}
              sect={caseItem?.case_details?.Section || "N/A"}
              facts={caseItem?.case_details?.Facts || "No facts provided"}
              legalissues={
                caseItem?.case_details?.["Legal Issues"] ||
                "No legal issues provided"
              }
              keylegalques={
                caseItem?.case_details?.["Key Legal Questions"] ||
                "No key legal questions provided"
              }
              plaintiffarguments={
                caseItem?.case_details?.["Plaintiff Arguments"] ||
                "No plaintiff arguments"
              }
              defendantarguments={
                caseItem?.case_details?.["Defendant Arguments"] ||
                "No defendant arguments"
              }
              courtsreasoning={
                caseItem?.case_details?.["Court's Reasoning"] ||
                "No court reasoning provided"
              }
              decision={caseItem?.case_details?.Decision || "No decision made"}
              conclusion={caseItem?.case_details?.Conclusion || "No conclusion"}
              casesummary={
                caseItem?.case_details?.["Case Summary"] || "No case summary"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
