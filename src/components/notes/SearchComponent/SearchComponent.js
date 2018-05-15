import React, {Component} from 'react';
import './SearchComponent.css';

class SearchComponent extends Component {
  handleSearch = (event) => {
    this.props.handleSearch(event.target.value);
  }
  render() {
    return (
      <div className="searchComponent">
        <div className="searchAndAddBar">
          <span className="magnifyIcon">
            <img
              src={require('./magnifying-glass.png')}
              className="magnifyImage"
            />
          </span>
          <input
            type="search"
            className="searchInput"
            placeholder="Search"
            onChange={this.handleSearch}
          />

          <button
            className="addButton"
            onClick={this.props.handleAdd}
          >
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
