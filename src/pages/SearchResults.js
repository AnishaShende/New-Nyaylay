import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TextResultBox from "./components/TextResultBox";
import Card from "./components/Card";
import FilterBar from "./components/FilterBar";

function SearchResults() {
  const location = useLocation();
  const searchQuery = location.state?.searchQuery || "";

  const [predictionResult, setPredictionResult] = useState("");
  const [similarCases, setSimilarCases] = useState([]);
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch("https://five-years-deny.loca.lt/ask", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: searchQuery }),
        });

        if (!response.ok) {
          // throw new Error(HTTP error! Status: ${response.status});
          console.log("error!!!!");
        }

        const data = await response.json();
        console.log("API Response:", data); // Print API response to console

        if (data && data.Data) {
          setPredictionResult(data.Data.Predictive_analysis || "");
          setSimilarCases(data.Data.Similar_cases || []);
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
              description={caseItem?.Decision || "N/A"}
              link="" // Add a link if available
              caseno={caseItem?.case_details?.["Case No"] || "N/A"}
              casename={caseItem?.case_details?.["Case Name"] || "N/A"}
              court={caseItem?.case_details?.Court || "N/A"}
              casestatus={caseItem?.case_details?.["Case Status"] || "N/A"}
              judge={caseItem?.case_details?.Judge || "N/A"}
              sect={caseItem?.case_details?.Section || "N/A"}
              facts={caseItem?.case_details?.Facts || "N/A"}
              petition={caseItem?.case_details?.Petition || "N/A"}
              legalissues={caseItem?.case_details?.["Legal Issues"] || "N/A"}
              keylegalques={
                caseItem?.case_details?.["Key Legal Questions"] || "N/A"
              }
              plaintiffarguments={
                caseItem?.case_details?.["Plaintiff Arguments"] || "N/A"
              }
              defendantarguments={
                caseItem?.case_details?.["Defendant Arguments"] || "N/A"
              }
              courtsreasoning={
                caseItem?.case_details?.["Court's Reasoning"] || "N/A"
              }
              decision={caseItem?.case_details?.Decision || "N/A"}
              conclusion={caseItem?.case_details?.Conclusion || "N/A"}
              casesummary={caseItem?.case_details?.["Case Summary"] || "N/A"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
