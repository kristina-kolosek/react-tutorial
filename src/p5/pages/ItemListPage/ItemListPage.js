import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleShowSuccess } from '../../reducers/TodoReducer/actions';

class ItemListPage extends Component {
  handleClick = () => {
    // this.props.showSuccess = true;
    this.props.toggleShowSuccess(!this.props.showSuccess)
  }

  render() {
    return (
      <div>
        <h1>{this.props.appName}</h1>
        <button onClick={this.handleClick}>
          CLICK ME
        </button>
        {
          this.props.showSuccess ?
          (
            <p>
              <bold style={{color: 'hotpink'}}>
                YAYYYYY
              </bold>
            </p>
          ) :
          null
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    appName: state.todo.appName,
    showSuccess: state.todo.showSuccess,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleShowSuccess: toggleShowSuccess,
  }, dispatch)
}

ItemListPage = connect(mapStateToProps, mapDispatchToProps)(ItemListPage)

export default ItemListPage;
