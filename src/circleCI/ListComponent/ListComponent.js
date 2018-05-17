import React, {Component} from 'react';
import ListItem from '../ListItem/ListItem';
import './ListComponent.css';

class ListComponent extends Component {
  renderBuilds() {
    if(this.props.builds.length > 0) {
      return this.props.builds.map((item, index) => {
        return(
          <div key={`build_${index}`}>
            <ListItem
              build={item}
            />
          </div>
        )
      });
    }else {
      return <div></div>
    }
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
