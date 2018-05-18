import React, {Component} from 'react';
import './HeaderComponent.css';

class HeaderComponent extends Component {
  getLogo = () => {
    return require("./logo.png");
  }
  render() {
    return (
      <div className="headerComponent">
        <div className="itleSection">
          <div
            className="headerTitle">
            CIRCLE CI
          </div>

        </div>
        <div
          className="subheader"
        >
          {this.props.subheader}
        </div>
      </div>
    );
  }
}
export default HeaderComponent;
