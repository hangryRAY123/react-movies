import React, { useState, useEffect } from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

export const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=transformers`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const searchMovies = (film, filter = 'all') => {
    setLoading(true);

    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${film}${
        filter !== 'all' ? `&type=${filter}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <main className='container content'>
      <Search searchMovies={searchMovies} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
};
