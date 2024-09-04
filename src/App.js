import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResults from './pages/SearchResults';
import Home from './pages/Home';




function App() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    
      <div className="font-sans antialiased">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-results" element={<SearchResults searchQuery={searchQuery} />} />
        </Routes>
      </div>
    
  );
}

export default App;
