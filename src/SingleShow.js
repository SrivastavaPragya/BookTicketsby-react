import React from 'react';
import { Link } from 'react-router-dom';
import './SingleShow.css';

function SingleShow({ selectedShow }) {
  if (!selectedShow) {
    return <div>Loading...</div>;
  }

  const { name, type, language, genres } = selectedShow.show;

  return (
    <div className="single-show">
      <div className="single-show__content">
        <h1>{name}</h1>
        <p>Type: {type}</p>
        <p>Language: {language}</p>
        <p>Genres: {genres.join(', ')}</p>
        <img
          src={selectedShow.show.image ? selectedShow.show.image.medium : ''}
          alt={selectedShow.show.name}
        />
        <p dangerouslySetInnerHTML={{ __html: selectedShow.show.summary }}></p>
      </div>
      <Link to="/" className="single-show__button">
        Back to Shows
      </Link>
      <Link to={`/book-tickets/${selectedShow.show.id}`} className="single-show__button">
  Book Tickets
</Link>

    </div>
  );
}

export default SingleShow;