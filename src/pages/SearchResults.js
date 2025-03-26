// src/pages/SearchResults.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import movies from '../data/moviesData';
import MovieCardComponent from '../components/MovieCardComponent';
import { Container, Row, Col } from 'react-bootstrap';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const searchResults = movies.filter((movie) =>
    movie.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">🔍 Search Results for "{query}"</h2>
      {searchResults.length === 0 ? (
        <h5 className="text-center">😢 No Results Found!</h5>
      ) : (
        <Row>
          {searchResults.map((movie) => (
            <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <MovieCardComponent movie={movie} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default SearchResults;
