import React, {Component} from 'react';
import ListItem from '../ListItem/ListItem';
import './ListComponent.css';

class ListComponent extends Component {
  renderBuilds() {
    console.log(this.props.builds)
    return this.props.builds.map((item, index) => {
      return(
        <div key={`build_${index}`}>
          <ListItem
            build={item}
          />
        </div>
      )
    });
  }
  render() {
    return(
      <div>
        {
          this.renderBuilds()
        }
      </div>
    )
  }
}

export default ListComponent;
