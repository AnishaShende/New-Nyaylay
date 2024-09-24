import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResults from './pages/SearchResults';
import Home from './pages/Home';
import CaseVisualization from './pages/RenderGraph';



function App() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    
      <div className="font-sans antialiased">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-results" element={<SearchResults searchQuery={searchQuery} />} />
          <Route path="/visualize/:caseId" component={CaseVisualization} />
        </Routes>
      </div>
    
  );
}

export default App;
