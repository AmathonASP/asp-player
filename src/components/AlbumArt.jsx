import React, { Component } from 'react';

export default class Dropzone extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { albumArtSrc } = this.props;
    
    return (
      <div className='album-img-wrapper'>
        <img src={albumArtSrc}/>
        <button className='btn btn-white btn-upload-image'>Upload Image file </button>
      </div>
    );
  }
}