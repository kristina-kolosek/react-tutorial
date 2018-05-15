import React, {Component} from 'react';
import './SearchComponent.css';

class SearchComponent extends Component {
  render() {
    return (
      <div className="searchComponent">
        <div class="searchAndAddBar">
          <span class="magnifyIcon">
            <img
              src={require('./magnifying-glass.png')}
              className="magnifyImage"
            />
          </span>
          <input
            type="search"
            className="searchInput"
            placeholder="Search"
          />
          <button class="addButton">
            <img
              src={require('./add.png')}
              className="addImage"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default SearchComponent;
