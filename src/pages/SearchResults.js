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
  const [isLoading, setIsLoading] = useState(true); // State for loading
  const [errorMessage, setErrorMessage] = useState(""); // State for error

  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true); // Start loading
      try {
        const response = await fetch(
          "https://fastapixrailway-production.up.railway.app/ask",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer f0ee9948-670b-49c9-98ac-8c499fbaa780",
            },
            body: JSON.stringify({ question: searchQuery }),
          }
        );

        if (!response.ok) {
          console.error("Error in API call, status:", response.status);
          setErrorMessage("Failed to fetch data. Please try again later.");
          return;
        }

        const data = await response.json();
        console.log("API Response:", data);

        if (data && data.Data) {
          setPredictionResult(
            data.Predictive_analysis || "No analysis available"
          );
          setSimilarCases(data.Data.Similar_cases || []);
        } else {
          console.error("Unexpected data structure:", data);
          setErrorMessage("Unexpected response from the server.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setErrorMessage("An error occurred. Please try again.");
      } finally {
        setIsLoading(false); // Stop loading
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
        {isLoading ? (
          // Loading Spinner or message
          <div className="flex justify-center items-center h-screen">
            <div className="text-xl">Loading...</div>
          </div>
        ) : errorMessage ? (
          // Error message display
          <div className="text-red-500 text-center">{errorMessage}</div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-bold">
                Predictive Analysis on {searchQuery}
              </h1>
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
              {similarCases.length > 0 ? (
                similarCases.map((caseItem, index) => (
                  <Card
                    key={index}
                    title={caseItem?.case_name || "Case name not available"}
                    casename={caseItem?.case_name || "Unknown case"}
                    date={caseItem?.date || "No date"}
                    description={caseItem?.decision || "No decision available"}
                    link=""
                    caseno={caseItem?.case_id || "Case ID not available"}
                    court={caseItem?.court || "Unknown Court"}
                    casestatus={caseItem?.case_status || "Unknown status"}
                    judge={caseItem?.judges_involved || "Unknown Judge"}
                    sect={
                      caseItem?.sections_clauses || "No sections or clauses"
                    }
                    facts={caseItem?.facts || "No facts provided"}
                    petition={caseItem?.petition_filed || "No petition filed"}
                    legalissues={
                      caseItem?.legal_issues || "No legal issues provided"
                    }
                    keylegalques={
                      caseItem?.key_legal_questions ||
                      "No key legal questions provided"
                    }
                    plaintiffarguments={
                      caseItem?.plaintiff_arguments || "No plaintiff arguments"
                    }
                    defendantarguments={
                      caseItem?.defendant_arguments || "No defendant arguments"
                    }
                    courtsreasoning={
                      caseItem?.court_reasoning || "No court reasoning provided"
                    }
                    decision={caseItem?.decision || "No decision made"}
                    conclusion={caseItem?.conclusion || "No conclusion"}
                    casesummary={caseItem?.case_summary || "No case summary"}
                  />
                ))
              ) : (
                <p>No similar cases found.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
