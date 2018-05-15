import React, {Component} from 'react';
import './DocumentListComponent.css';

class DocumentListComponent extends Component {

  renderDocumentItems = () => {
    return this.props.documents.map((item, index) => (
      <div key={`document_${index}`} className="documentItem" onClick={this.props.handleClick}>
        <div className="itemText">{item.title} </div>
      </div>
    ))
  }

  render() {
    return (
      <div className="documentListComponent">
        {this.renderDocumentItems()}
      </div>
    )
  }
}

export default DocumentListComponent;
