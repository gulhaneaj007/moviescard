import React, { useContext, useEffect, useState } from 'react';

const DataContext = React.createContext();

export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const DataProvider = ({ children }) => {
  const [loading, setloading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isErr, setisErr] = useState({ show: 'false', msg: '' });
  const [query, setQuery] = useState('titanic');

  const getMovies = async (url) => {
    setloading(true);
    try {
      const resp = await fetch(`${url}`);
      const data = await resp.json();

      if (data.Response === 'True') {
        setloading(false);
        setMovie(data.Search);
        setisErr({
          show: false,
          msg: '',
        });
      } else {
        setisErr({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    var clearTimer = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 500);
    return () => clearTimeout(clearTimer);
  }, [query]);
  return (
    <DataContext.Provider value={{ movie, loading, isErr, query, setQuery }}>
      {children}
    </DataContext.Provider>
  );
};

const useGlobleContext = () => {
  return useContext(DataContext);
};

export { DataProvider, useGlobleContext };
