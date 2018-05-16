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
      selectedDocument: null,
      filtered: false,
      filteredDocuments : [],
      editting: false
    }
  }

  handleDocumentClick = (event) => {
    this.state.documents.filter((document) => {
      if(document.title == event.target.textContent.trim()) {
        this.setState((prevState) => {
          let newState = prevState;
          let selectedDocument = {
            oldTitle: document.title,
            title: document.title,
            content: document.content
          };
          newState["selectedDocument"] = selectedDocument;
          newState["editting"] = false;
          return {
            newState
          }
        })
      }
    })
    //console.log(event.target.textContent)
  }

  handleChange = (field, newValue) => {
    this.setState((prevState) => {
      let newState = prevState;
      newState["selectedDocument"][field] = newValue;
      if(prevState["selectedDocument"]["oldTitle"]) {
        newState["editting"] = true;
      }
      return {
        newState
      }
    });
  }

  handleDelete = (event) => {
    this.setState((prevState) => {
      let newDocuments = prevState["documents"].filter((document) => {
        return document.title == this.state.selectedDocument.oldTitle ? false : document;
      });
      let newState = prevState;
      newState["documents"] = newDocuments;
      newState["selectedDocument"] = null;
      return {
        newState
      }
    })
  }

  handleSave = (event) => {
    this.setState((prevState) => {
      let newDocument = {
        title: this.state.selectedDocument["title"],
        content: this.state.selectedDocument["content"]
      }
      let newState = prevState;
      let selectedDocument = {
        oldTitle: newDocument.title,
        title: newDocument.title,
        content: newDocument.content
      }
      let flag = 0;
      let newDocuments = prevState.documents.filter((document) => {
        if(document.title.trim() == this.state.selectedDocument.oldTitle.trim()) {
          document.title = newDocument.title;
          document.content = newDocument.content;
          flag = 1;
          return document
        }
      })
      if(flag == 0) {
        newState['documents'].push(newDocument);
      }
      newState['editting'] = false;
      newState['selectedDocument'] = selectedDocument;
      return {
        newState
      }
    });
  }

  handleAdd = () => {
    this.setState((prevState) => {
      let newState = prevState;
      let newSelectedDocument = {
        oldTitle: "",
        title: "",
        content: ""
      }
      newState['selectedDocument'] = newSelectedDocument;
      return {
        newState
      }
    })
  }

  handleSearch = (query) => {
    this.setState((prevState) => {
      let newState = prevState;
      if(query == "") {
        newState["filtered"] = false;
      } else {
        newState["filtered"] = true;
        newState["filteredDocuments"] = prevState.documents.filter((document) =>{
          if(document.title.includes(query.trim())) {
            return true;
          }
        });
      }
      return {
        newState
      }
    })
  }
  renderEditor = () => {
    return (<EditorComponent
      document={this.state.selectedDocument}
      handleChange={this.handleChange}
    />
    )
  }

  renderError = () => {
    return (
      <div>
        No document selected
      </div>
    )
  }
   render() {
    return (
      <div className="notesComponent">
        <div className="searchAndListSection">
          <SearchComponent
            handleAdd = {this.handleAdd}
            handleSearch = {this.handleSearch}
          />
          <DocumentListComponent
            documents={this.state.filtered ? this.state.filteredDocuments : this.state.documents}
            handleClick={this.handleDocumentClick}
            editting={this.state.editting}
            documentEditted={this.state.editting ? this.state.selectedDocument.oldTitle : null}
          />
        </div>
        <div className="headerAndEditorSection">
          <HeaderComponent
            handleDelete={this.handleDelete}
            handleSave={this.handleSave}
          />
          {this.state.selectedDocument ? this.renderEditor() : this.renderError()}
        </div>
      </div>
    )
  }
}

export default NotesComponent;
