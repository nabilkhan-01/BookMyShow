// src/pages/BookingDetails.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

const BookingDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedSeats, movieName, timeSlot } = location.state || {};

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    const { name, email, phone, cardNumber, expiry, cvv } = formData;

    if (!name.trim()) newErrors.name = 'Name is required.';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required.';
    if (!phone.trim() || !/^\d{10}$/.test(phone)) newErrors.phone = 'Valid 10-digit phone number is required.';
    if (!cardNumber.trim() || !/^\d{16}$/.test(cardNumber)) newErrors.cardNumber = 'Valid 16-digit card number is required.';
    if (!expiry.trim() || !/^\d{2}\/\d{2}$/.test(expiry)) newErrors.expiry = 'Expiry date in MM/YY format is required.';
    if (!cvv.trim() || !/^\d{3}$/.test(cvv)) newErrors.cvv = 'Valid 3-digit CVV is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setShowAlert(true);
      setTimeout(() => {
        navigate('/'); // Redirect to home after successful booking
      }, 3000);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">🎟️ Confirm Booking</h2>

      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Booking confirmed successfully! 🎉 Your ticket will be emailed shortly.
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        {/* Name */}
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        {/* Email */}
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        {/* Phone */}
        <Form.Group controlId="formPhone" className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter 10-digit phone number"
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
        </Form.Group>

        <hr />

        {/* Card Details */}
        <h5 className="mt-4">💳 Payment Information</h5>

        {/* Card Number */}
        <Form.Group controlId="formCardNumber" className="mb-3">
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="Enter 16-digit card number"
            isInvalid={!!errors.cardNumber}
          />
          <Form.Control.Feedback type="invalid">{errors.cardNumber}</Form.Control.Feedback>
        </Form.Group>

        {/* Expiry Date */}
        <Form.Group controlId="formExpiry" className="mb-3">
          <Form.Label>Expiry Date (MM/YY)</Form.Label>
          <Form.Control
            type="text"
            name="expiry"
            value={formData.expiry}
            onChange={handleChange}
            placeholder="MM/YY"
            isInvalid={!!errors.expiry}
          />
          <Form.Control.Feedback type="invalid">{errors.expiry}</Form.Control.Feedback>
        </Form.Group>

        {/* CVV */}
        <Form.Group controlId="formCVV" className="mb-4">
          <Form.Label>CVV</Form.Label>
          <Form.Control
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="Enter CVV"
            isInvalid={!!errors.cvv}
          />
          <Form.Control.Feedback type="invalid">{errors.cvv}</Form.Control.Feedback>
        </Form.Group>

        {/* Confirm Booking Button */}
        <Button variant="danger" type="submit" className="w-100">
          🎟️ Confirm & Pay
        </Button>
      </Form>
    </Container>
  );
};

export default BookingDetails;
