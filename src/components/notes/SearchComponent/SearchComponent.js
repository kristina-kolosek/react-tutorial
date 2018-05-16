import React, {Component} from 'react';
import './SearchComponent.css';
import ButtonComponent from '../ButtonComponent/ButtonComponent'

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

          <ButtonComponent
            handleClick={this.props.handleAdd}
            className="addBtn"
            path="./add.png"
          />

        </div>
      </div>
    )
  }
}

export default SearchComponent;
