import React, {Component} from 'react';
import SearchComponent from '../SearchComponent/SearchComponent';
import DocumentListComponent from '../DocumentListComponent/DocumentListComponent';
import EditorComponent from '../EditorComponent/EditorComponent';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import './NotesComponent.css';


class NotesComponent extends Component {
  constructor() {
    super();
    this.state = {
      documents: [
        {
          title: "title1",
          content: "content"
        },
        {
          title: "title2",
          content: "content2"
        }
      ],
      selectedDocument: {
        title: "",
        content: ""
      }
    }
  }

  handleDocumentClick = (event) => {
    this.state.documents.filter((document) => {
      if(document.title == event.target.textContent.trim()) {
        this.setState((prevState) => {
          let newState = prevState;
          newState["selectedDocument"] = document;
          return {
            newState
          }
        })
      }
    })
    //console.log(event.target.textContent)
  }
   render() {
    return (
      <div className="notesComponent">
        <div className="searchAndListSection">
          <SearchComponent />
          <DocumentListComponent
            documents={this.state.documents}
            handleClick={this.handleDocumentClick}
          />
        </div>
        <div className="headerAndEditorSection">
          <HeaderComponent />
          <EditorComponent document={this.state.selectedDocument}/>
        </div>
      </div>
    )
  }
}

export default NotesComponent;
