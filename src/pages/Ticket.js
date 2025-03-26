// src/pages/Ticket.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const Ticket = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { movieName, selectedSeats, selectedTime, formData, ticketPrice } = location.state || {};

  if (!movieName || !selectedSeats || !formData) {
    return (
      <Container className="mt-5 text-center">
        <h3>No Ticket Data Available 😞</h3>
        <Button onClick={() => navigate('/movies')} variant="danger" className="mt-3">
          Browse Movies
        </Button>
      </Container>
    );
  }

  // Generate PDF Download
  const handleDownload = () => {
    const ticketContent = `
      Movie: ${movieName}\n
      Name: ${formData.name}\n
      Email: ${formData.email}\n
      Seats: ${selectedSeats.join(', ')}\n
      Showtime: ${selectedTime}\n
      Total Price: ₹${ticketPrice * selectedSeats.length}
    `;

    const blob = new Blob([ticketContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Ticket_${movieName}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Container className="mt-5 text-center">
      <h2>🎟️ Booking Confirmed!</h2>
      <p>✅ Thank you for booking your ticket!</p>
      <p><strong>Movie:</strong> {movieName}</p>
      <p><strong>Seats:</strong> {selectedSeats.join(', ')}</p>
      <p><strong>Showtime:</strong> {selectedTime}</p>
      <p><strong>Total Price:</strong> ₹{ticketPrice * selectedSeats.length}</p>

      <Button variant="success" onClick={handleDownload} className="mt-3">
        📥 Download Ticket
      </Button>
      <Button variant="danger" onClick={() => navigate('/movies')} className="mt-3 ms-2">
        🎬 Browse More Movies
      </Button>
    </Container>
  );
};

export default Ticket;
