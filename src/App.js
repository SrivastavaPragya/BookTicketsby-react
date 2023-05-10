
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shows from './Shows';
import SingleShow from './SingleShow';
import BookTickets from './BookTickets';

const API_URL = 'https://api.tvmaze.com/search/shows?q=all';

function App() {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  const handleShowSelect = (show) => {
    setSelectedShow(show);
  };

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchShows();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shows shows={shows} onShowSelect={handleShowSelect} />} />
          <Route path="/show/:id" element={<SingleShow selectedShow={selectedShow} />} />
          <Route path="/book-tickets/:id" element={<BookTickets selectedShow={selectedShow} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;