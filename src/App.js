import awsExports from "./aws-exports";
import awsconfig from './aws-exports'; 
import {Amplify} from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import './globals.css';
import React, { Component } from 'react';
import axios from 'axios';

Amplify.configure(awsExports, awsconfig);

class App extends Component {
  state = {
    selectedFile: null,
    fileUplodedSuccessfully: false
  }

  onFileChange = event => {
    this.setState ({selectedFile: event.target.files[0]});
  }

  onFileUpload = () => {
    const formData = new FormData();
    formData.append(
      "demo file",
      this.state.selectedFile,
      this.state.selectedFile.name
    )
    //call api
    axios.options("https://qfwklhzyi0.execute-api.eu-north-1.amazonaws.com/prod/file-upload", formData).then(() => {
      this.setState({selectedFile: null});
      this.setState({fileUplodedSuccessfully: true});
    }).catch((error) => {console.error("Erreur lors de l'envoi des fichiers", error); alert("Error during uploading file please retry or contact the developper team")})
 }

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div className='ifSelected'>
          <h2> File Details : </h2>
          <p> <strong>File Name :</strong> {this.state.selectedFile.name} </p>
          <p> <strong>File Type :</strong> {this.state.selectedFile.type} </p>
          <p> <strong>File Size :</strong> {this.state.selectedFile.size} </p>
          <p> <strong>Last Modified :</strong> {" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()} 
          </p>
        </div>
      );
    } else if (this.state.fileUplodedSuccessfully) {
      return (
        <div>
          <br />
          <h4 className='ifSuccess'> Your file has been successfully uploaded</h4>
        </div>
      );
    } else {
      return (
        <div className='nothing'>
          <br />
          <h4> Choose a file and then press the Upload button </h4>
        </div>
      )
    }
  }

  render(){
    return (
      <div className='container'>
        <h2> Hello Everyone </h2>
        <h3 className="h3"> Welcome to my upload file system choose a file you want to upload and <br/> Click one the down button for upload this on my file system. <br/> ENJOY IT '-' !! <br/></h3>
        
        <div className="form">
          <input type='file' onChange={this.onFileChange} className="input" />
          <button onClick={this.onFileUpload}>
            Upload
          </button>
        </div>

        {this.fileData()}
      </div>
    )
  }
}

export default withAuthenticator(App);
