// src/pages/Checkout.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedSeats, movieName, selectedTime, ticketPrice } = location.state || {};

  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    cvv: '',
  });
  const [success, setSuccess] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Payment Submission
  const handlePayment = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.cardNumber || !formData.cvv) {
      alert('Please fill all the required fields');
      return;
    }

    // Mock Payment Processing
    setTimeout(() => {
      setSuccess(true);
      setTimeout(() => {
        navigate('/ticket', {
          state: {
            movieName,
            selectedSeats,
            selectedTime,
            formData,
            ticketPrice,
          },
        });
      }, 2000);
    }, 1500);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">💳 Checkout & Payment</h2>

      {success && <Alert variant="success">Payment Successful! 🎉 Redirecting...</Alert>}

      <Form onSubmit={handlePayment} className="border p-4 rounded shadow-sm">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Card Number</Form.Label>
          <Form.Control type="text" name="cardNumber" maxLength="16" value={formData.cardNumber} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>CVV</Form.Label>
          <Form.Control type="password" name="cvv" maxLength="3" value={formData.cvv} onChange={handleChange} required />
        </Form.Group>

        <Button variant="danger" type="submit" className="w-100">
          Pay ₹{ticketPrice * selectedSeats.length}
        </Button>
      </Form>
    </Container>
  );
};

export default Checkout;
