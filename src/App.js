// src/App.js
import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import Auth from './pages/Auth';
import Booking from './pages/Booking';
import BookingDetails from './pages/BookingDetails';
import { Container } from 'react-bootstrap';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Dark Mode Toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? '' : 'dark-mode';
  };

  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : ''}>
        {/* Navbar with Dark Mode Toggle */}
        <NavbarComponent toggleDarkMode={toggleDarkMode} />
        <Container className="mt-4">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* Movies Listing */}
            <Route path="/movies" element={<Movies />} />

            {/* Movie Details Page */}
            <Route path="/movie/:name" element={<MovieDetails />} />

            {/* Sign In & Sign Up Page */}
            <Route path="/signin" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />

            {/* Seat Selection & Booking */}
            <Route path="/booking/:name" element={<Booking />} />

            {/* Booking Details and Payment */}
            <Route path="/booking-details" element={<BookingDetails />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
