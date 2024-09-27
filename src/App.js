import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; // No need to import Router here
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import CaseVisualization from "./pages/components/CaseVisualization"; // Make sure this component doesn't also have a Router

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="font-sans antialiased">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search-results"
          element={<SearchResults searchQuery={searchQuery} />}
        />
        <Route path="/visualize/:caseId" element={<CaseVisualization />} />
      </Routes>
    </div>
  );
}

export default App;
