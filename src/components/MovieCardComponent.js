// src/components/MovieCardComponent.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCardComponent = ({ movie }) => {
  return (
    <Card className="movie-card">
      <Card.Img variant="top" src={movie.image} className="movie-card-img" />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>
          Genre: {movie.genre} <br />
          Rating: {movie.rating} ⭐
        </Card.Text>
        <Button as={Link} to={`/movie/${movie.name}`} variant="primary">
          Book Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCardComponent;
