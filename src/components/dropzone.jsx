import React, { Component } from 'react';
import audio from '../asset/svg/audio.svg';

export default class Dropzone extends Component {
  render() {
    return (
      <div className="upload-file-dropzone" onClick={this.props.onClick}>
        <div className="dropzone-content">
          <div className="audio-icon-wrapper">
            <img src={audio} />
          </div>
          <div className="audio-icon-content">
            Drop audio files to upload or browser
          </div>
        </div>
      </div>  
    );
  }
}