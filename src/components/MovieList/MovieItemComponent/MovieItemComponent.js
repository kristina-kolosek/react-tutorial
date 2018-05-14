import React, { Component } from 'react';
import './MovieItemComponent.css';
import DetailsButton from '../DetailsButton/DetailsButton';


class MovieItemComponent extends Component {
  renderActors = () => {
    return this.props.movie.actors.map((item, index) => (
      <span key={`actor_${index}`}>
        { item },
      </span>
    ))
  }

  renderDetails = () => {
    return (
      <div className="info">
        <div>Director: {this.props.movie.director}</div>
        <div>Duration: {this.props.movie.duration}</div>
        <div>
          Actors: {
            this.renderActors()
          }
        </div>
        <DetailsButton
          handleClick={this.props.handleClick}
        />
      </div>
    )
  }
  render() {
    return (
      <div className="movieItem">
        <div className={this.props.movie.className}>
        </div>
        <div className="movieDescription">
          <div className="movieTitle">
            {this.props.movie.title}
          </div>
          {
            this.renderDetails()
          }
        </div>
      </div>
    )
  }
}

export default MovieItemComponent;
