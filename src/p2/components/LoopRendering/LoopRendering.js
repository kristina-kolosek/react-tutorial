import React, { Component } from 'react';

// Check this out: https://kolosek.com/react-jsx-loops/

const movies = [
  {
    title: 'Inception',
    duration: '2h01m'
  },
  {
    title: 'Looper',
    duration: '1h47m'
  },
  {
    title: 'Cloud Atlas',
    duration: '2h50h',
  },
];

function Movie({ item }) {
  return (
    <div>
      {
        Object.keys(item).map((key, indexOfKey) => {
          const value = item[key];
          return (
            <p>
              <b>{ key } :</b>
              { value }
            </p>
          );
        })
      }
      <hr/>
    </div>
  );
}

class LoopRendering extends Component {

  renderMovies = () => {
    return movies.map((item, index) => (
      <Movie
        key={item.id}
        item={item}
      />
    ));
  }

  render() {
    return (
      <div>
        {
          this.renderMovies()
        }
      </div>
    );
  }
}

export default LoopRendering;
