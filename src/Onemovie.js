import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { API_URL } from './context';

const Onemovie = () => {
  const { id } = useParams();
  const [loading, setloading] = useState(true);
  const [movie, setMovie] = useState('');

  const getMovies = async (url) => {
    setloading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      if (data.Response === 'True') {
        setloading(false);
        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    var clearTimer = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 500);
    return () => clearTimeout(clearTimer);
  }, [id]);

  if (loading) {
    return (
      <>
        <div className="movie-section">
          <div className="loading">Loading ...</div>
        </div>
      </>
    );
  }
  return (
    <>
      <section className="movie-section">
        <div className="movie-card">
          <figure>
            <img src={movie.Poster} />
          </figure>
          <div className="card-content">
            <p className="title">{movie.Title}</p>
            <p className="title">{movie.Title}</p>
            <p className="card-text">{movie.Released}</p>
            <p className="card-text">{movie.Genere}</p>
            <p className="card-text">{movie.imdbRating}/10</p>
            <p className="card-text">{movie.Contry}</p>
            <NavLink to="/" className="back-btn">
              Back
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
  return (
    <div>
      <h2>Our single movie {id}</h2>
    </div>
  );
};

export default Onemovie;
