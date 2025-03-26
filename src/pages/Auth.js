// src/pages/Auth.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignIn = location.pathname === '/signin';

  // State for Form Inputs
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignIn) {
      alert('Signed In Successfully!');
      navigate('/');
    } else {
      alert('Account Created Successfully!');
      navigate('/signin');
    }
  };

  return (
    <Container className="mt-5">
      <div className="auth-container p-4 shadow-lg rounded bg-light">
        <h2 className="text-center mb-4">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h2>

        <Form onSubmit={handleSubmit}>
          {/* Show Name Field for Sign Up */}
          {!isSignIn && (
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button variant="danger" type="submit" className="w-100">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </Button>

          {/* Switch Between Sign In and Sign Up */}
          <p className="mt-3 text-center">
            {isSignIn ? (
              <>
                New User?{' '}
                <Button
                  variant="link"
                  className="p-0"
                  onClick={() => navigate('/signup')}
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <Button
                  variant="link"
                  className="p-0"
                  onClick={() => navigate('/signin')}
                >
                  Sign In
                </Button>
              </>
            )}
          </p>
        </Form>
      </div>
    </Container>
  );
};

export default Auth;
