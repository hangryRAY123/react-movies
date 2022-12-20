import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

export class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
    disabled: true,
  };

  componentDidMount() {
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=transformers`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movies: data.Search,
          loading: false,
        }).catch((err) => {
          console.error(err);
          this.setState({ loading: false });
        })
      );
  }

  searchMovies = (film, filter = 'all') => {
    this.setState({ loading: true });

    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${film}${
        filter !== 'all' ? `&type=${filter}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movies: data.Search,
          loading: false,
        }).catch((err) => {
          console.error(err);
          this.setState({ loading: false });
        })
      );
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <main className='container content'>
        <Search search={this.searchMovies} />
        {loading ? (
          <Preloader />
        ) : (
          <Movies movies={movies} />
        )}
      </main>
    );
  }
}