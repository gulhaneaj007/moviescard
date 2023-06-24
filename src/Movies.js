import React from 'react';
import { useGlobleContext } from './context';
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const { movie, loading } = useGlobleContext();

  if (loading) {
    return (
      <>
        <div className="">
          <div className="loading">Loading ...</div>
        </div>
      </>
    );
  }
  return (
    <section className="movie-page">
      <div className="container grid grid-4-col">
        {movie.map((currmovie, key) => {
          const { imdbID, Title, Poster } = currmovie;
          let movie_name = Title.substring(0, 15);
          return (
            <NavLink to={`movie/${imdbID}`} key={key}>
              <div className="card">
                <div className="card-info">
                  <h2>
                    {movie_name.length >= 15 ? `${movie_name}...` : movie_name}
                  </h2>
                  <img src={Poster} alt={imdbID} />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
