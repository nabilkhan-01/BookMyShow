// src/components/CarouselComponent.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import movies from '../data/moviesData';

const CarouselComponent = () => {
  return (
    <Carousel className="carousel-container">
      {movies.map((movie) => (
        <Carousel.Item key={movie.id}>
          <img
            className="d-block w-100"
            src={movie.image}
            alt={movie.name}
            style={{
              maxHeight: '500px', // Set max height to prevent oversize
              objectFit: 'cover', // Prevent image distortion
              margin: '0 auto',
            }}
          />
          <Carousel.Caption>
            <h3>{movie.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
