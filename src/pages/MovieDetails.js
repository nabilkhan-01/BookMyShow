// src/pages/MovieDetails.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import movies from '../data/moviesData';
import { Container, Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const MovieDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.name === name);

  if (!movie) {
    return (
      <Container className="mt-5 text-center">
        <h3>Movie Not Found 😞</h3>
      </Container>
    );
  }

  // Redirect to Booking Page
  const handleBookNow = () => {
    navigate(`/booking/${movie.name}`);
  };

  return (
    <Container className="mt-5 text-center">
      <h2>{movie.name}</h2>
      <img src={movie.image} alt={movie.name} className="movie-detail-img mb-3" />
      <p>
        <strong>Genre:</strong> {movie.genre}
      </p>
      <p>
        <strong>Release Date:</strong> {movie.releaseDate}
      </p>
      <p>
        <strong>Rating:</strong> {movie.rating} / 10
      </p>
      <p>
        <strong>Price:</strong> ₹{movie.price}
      </p>

      {/* Centered Trailer */}
      <div className="trailer-container">
        <ReactPlayer url={movie.trailerUrl} controls width="100%" height="400px" />
      </div>

      <Button variant="danger" onClick={handleBookNow} className="mt-3">
        🎟️ Book Now
      </Button>
    </Container>
  );
};

export default MovieDetails;
