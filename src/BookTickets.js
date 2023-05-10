import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Tickets.css"
function BookTickets({ selectedShow }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [numberOfTickets, setNumberOfTickets] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { name, email, phone, numberOfTickets };
    // Save formData to localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(formData);
  };

  if (!selectedShow) {
    return <div>Loading...</div>;
  }

  const { name: showName, image } = selectedShow.show;

  return (
    <div className="book-tickets">
      <div className="book-tickets__content">
        <h1>{showName}</h1>
        <img src={image ? image.medium : ''} alt={showName} />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfTickets">Number of Tickets:</label>
            <input
              type="number"
              id="numberOfTickets"
              value={numberOfTickets}
              min="1"
              max="10"
              onChange={(event) => setNumberOfTickets(parseInt(event.target.value))}
            />
          </div>
          <button type="submit">Book Tickets</button>
        </form>
      </div>
      <Link to={`/show/${selectedShow.show.id}`} className="book-tickets__button">
        Back to Show Details
      </Link>
    </div>
  );
}

export default BookTickets;