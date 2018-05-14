import React, { Component } from 'react';
import MovieItemComponent from '../MovieItemComponent/MovieItemComponent';
import './MovieListComponent.css';

class MovieListComponent extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: 'Three Seconds',
          director: 'Anton Mc',
          actors: [
            'Marat Basharov',
            'Vladimir Mashkov',
          ],
          duration: '134min',
          className: 'threeSeconds',
        },
        {
          title: 'Isle of dogs',
          director: 'Wes Anderson',
          actors: [],
          duration: '101min',
          className: 'isleOfDogs',
        },
        {
          title: 'Stolen princess',
          director: 'Oleg Malamuzh',
          actors: [],
          duration: '85min',
          className: 'stolenPrincess',
        },
      ]
    }
  }

  handleClick = () => {
    console.log("click");
  }
  renderMovieItemComponent = () => {
    return this.state.movies.map((item, index) => (
      <div key={`movie_${index}`}>
        <MovieItemComponent
          movie={item}
          handleClick={this.handleClick}
        />
      </div>
    ))
  }
  render() {
    return (
      <div className="MovieItems">
        {
          this.renderMovieItemComponent()
        }
      </div>
    )
  }
}

export default MovieListComponent;
