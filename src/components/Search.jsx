import React, { useState } from 'react';

export const Search = (props) => {
  const { searchMovies = Function.prototype } = props;

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const handleKey = (evt) => {
    if (evt.key === 'Enter') {
      searchMovies(search, setFilter('all'));
    }
  };

  const handleChange = (evt) => {
    setFilter(evt.target.value);
    searchMovies(search, evt.target.value);
  };

  return (
    <div className='row'>
      <div className='input-field col s12'>
        <input
          placeholder='Search'
          type='search'
          className='validate'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
          onFocus={() => setSearch('')}
        />
        <button
          className='btn search-btn'
          onClick={() =>
            searchMovies(search, setFilter('all'))
          }
        >
          Search
        </button>
        <div className='radio'>
          <p>
            <label>
              <input
                name='filter'
                type='radio'
                value='all'
                onChange={handleChange}
                checked={filter === 'all'}
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                name='filter'
                type='radio'
                value='movie'
                onChange={handleChange}
                checked={filter === 'movie'}
              />
              <span>Movies only</span>
            </label>
          </p>
          <p>
            <label>
              <input
                name='filter'
                type='radio'
                value='series'
                onChange={handleChange}
                checked={filter === 'series'}
              />
              <span>Series only</span>
            </label>
          </p>
          <p>
            <label>
              <input
                name='filter'
                type='radio'
                value='game'
                onChange={handleChange}
                checked={filter === 'game'}
              />
              <span>Game only</span>
            </label>
          </p>
        </div>
      </div>
    </div>
  );
};
