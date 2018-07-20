import React, { Component } from 'react';
import audio from '../asset/svg/audio.svg';

export default class Dropzone extends Component {

  constructor(props) {
    super(props);
  }

  openFileExplore = (ref) => {
    this.refs.fileUploader.click();
  }

  handleFileChange = (event) => {
    this.props.handleFileChange(event.target.files[0]);    
  }

  render() {
    return (
      <div className="upload-file-dropzone" onClick={this.openFileExplore}>
        <div className="dropzone-content">
          <div className="audio-icon-wrapper">
            <img src={audio} />
          </div>
          <div className="audio-icon-content">
            Drop audio files to upload or browser
          </div>
          <input type="file" id="file" ref="fileUploader" style={{display: "none"}} onChange={(ref) => this.handleFileChange(ref)}/>
        </div>
      </div>
    );
  }
}