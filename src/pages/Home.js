// src/pages/Home.js
import React from "react";
import { Container, Button } from "react-bootstrap";
import CarouselComponent from "../components/CarouselComponent";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      {/* Carousel Section */}
      <Container className="mt-4 text-center">
        <CarouselComponent />
        {/* View All Movies Button */}
        <Button
          as={Link}
          to="/movies"
          variant="danger"
          className="mt-3 view-movies-btn"
        >
          🎬 View All Movies
        </Button>
      </Container>
    </div>
  );
};

export default Home;
