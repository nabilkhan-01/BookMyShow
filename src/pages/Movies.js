// src/pages/Movies.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import movies from "../data/moviesData";
import MovieCardComponent from "../components/MovieCardComponent";

const Movies = () => {
  return (
    <Container className="mt-4 movies-container">
      <h2 className="text-center mb-4 movies-heading">🎥 Available Movies</h2>
      <Row>
        {movies.map((movie) => (
          <Col
            key={movie.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="mb-4 d-flex justify-content-center"
          >
            <MovieCardComponent movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Movies;
