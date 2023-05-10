import React from 'react';
import { Link } from 'react-router-dom';
import './Shows.css';

function Shows({ shows, onShowSelect }) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> BOOK UR TICKETS!</h1>
      <div className="card-list">
        {shows.map((show) => (
          <div className="card" key={show.show.id}>
            <Link to={`/show/${show.show.id}`} onClick={() => onShowSelect(show)}>
              <img src={show.show.image?.medium} alt={show.show.name} />
              <div className="card-body">
                <h2>{show.show.name}</h2>
                <p>Genres: {show.show.genres.join(', ')}</p>
                <Link to={`/show/${show.show.id}`} className="card-button">
                  See Details
                </Link>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shows;