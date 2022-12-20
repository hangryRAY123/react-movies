import React from 'react';

export class Search extends React.Component {
  state = {
    search: 'transformers',
    filter: 'all',
  };

  handleKey = (evt) => {
    if (evt.key === 'Enter') {
      this.props.search(
        this.state.search,
        this.state.filter
      );
    }
  };

  handleChange = (evt) => {
    this.setState(
      () => ({
        filter: evt.target.value,
      }),
      () => {
        this.props.search(
          this.state.search,
          this.state.filter
        );
      }
    );
  };

  render() {
    return (
      <div className='row'>
        <div className='input-field col s12'>
          <input
            placeholder='Search'
            type='search'
            className='validate'
            value={this.state.search}
            onChange={(e) =>
              this.setState({ search: e.target.value })
            }
            onKeyDown={this.handleKey}
            onFocus={() => this.setState({ search: '' })}
          />
          <button
            className='btn search-btn'
            onClick={() =>
              this.props.search(
                this.state.search,
                this.state.filter
              )
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
                  onChange={this.handleChange}
                  checked={this.state.filter === 'all'}
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
                  onChange={this.handleChange}
                  checked={this.state.filter === 'movie'}
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
                  onChange={this.handleChange}
                  checked={this.state.filter === 'series'}
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
                  onChange={this.handleChange}
                  checked={this.state.filter === 'game'}
                />
                <span>Game only</span>
              </label>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
