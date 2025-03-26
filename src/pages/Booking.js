// src/pages/Booking.js
import React, { useState } from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const Booking = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [time, setTime] = useState('10:00 AM');

  const seatRows = Array.from({ length: 5 }, (_, i) => String.fromCharCode(65 + i)); // A, B, C...
  const seatNumbers = Array.from({ length: 10 }, (_, i) => i + 1);

  // Toggle Seat Selection
  const handleSeatClick = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  // Handle Proceed to Booking
  const handleProceedToBooking = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat!');
      return;
    }

    const pricePerSeat = 200;
    const totalPrice = selectedSeats.length * pricePerSeat;

    navigate('/booking-details', {
      state: {
        selectedSeats,
        movieName: name,
        time,
        price: totalPrice,
      },
    });
  };

  return (
    <Container className="mt-5 text-center">
      <h2>🎥 Booking for {name}</h2>
      <h5>Select Your Seats:</h5>

      <div className="my-4">
        {seatRows.map((row) => (
          <Row key={row} className="justify-content-center">
            {seatNumbers.map((num) => {
              const seat = `${row}${num}`;
              return (
                <Col key={seat} xs="auto" className="mb-2">
                  <Button
                    variant={selectedSeats.includes(seat) ? 'success' : 'outline-secondary'}
                    onClick={() => handleSeatClick(seat)}
                    className="seat-btn"
                  >
                    {seat}
                  </Button>
                </Col>
              );
            })}
          </Row>
        ))}
      </div>

      <h5>Select Show Time:</h5>
      <select
        className="form-select my-3 w-25 mx-auto"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="10:00 AM">10:00 AM</option>
        <option value="1:00 PM">1:00 PM</option>
        <option value="4:00 PM">4:00 PM</option>
        <option value="7:00 PM">7:00 PM</option>
      </select>

      <Button variant="danger" onClick={handleProceedToBooking} className="mt-3">
        ✅ Proceed to Booking
      </Button>
    </Container>
  );
};

export default Booking;
