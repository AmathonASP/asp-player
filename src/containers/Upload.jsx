import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import jsmediatags from 'jsmediatags';
import base64js from 'base64-js';
import Dropzone from '../components/dropzone';
import AlbumArt from '../components/AlbumArt';
import esc from '../asset/svg/esc.svg';
import addBtnOn from '../asset/svg/add-btn-on.svg';
import uploadBtn from '../asset/svg/upload-btn.svg';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      artist: '',
      albumArtSrc: null,
    };
  }

  updateFileInfo = (tags) => {
    const { title, artist, APIC } = tags;
    this.setState({
      title,
      artist
    });
    if(APIC) {
      const { data } = APIC;
      const albumArtSrc = 'data:' + data.format + ';base64,' + base64js.fromByteArray(data.data);
      this.setState({
        albumArtSrc,
      })
    }
  }

  readMediaTag = (file) => {
    const metaTag = jsmediatags.read(file, {
      onSuccess: ({tags}) => {
        this.updateFileInfo(tags);
      },
      onError: (error) => {
        console.log(error);
      }
    });
  }

  handleFile = (file) => {
    if(file) {
      this.readMediaTag(file);
    }
  }

  hanldeAlbumArtChange = (file) => {

  }

  render() {
    return (
      <div className="Upload">
        <Header style={{backgroundColor: 'inherit', justifyContent: 'center'}}/>
        <div className="upload-form-wrapper">
          <form>
            <div className="upload-form-header">
              <div className="upload-svg-wrapper">
                <img src={uploadBtn} className='upload-svg' />
              </div>
              <div className="upload-file-header">
                Upload Files
              </div>
              <div className='esc-page'>
                <Link to='/'>
                  <img src={esc} className='esc-svg' height="27px"/>
                </Link>
              </div>
            </div>
            <div className="upload-form-main">
              <div className="upload-file">
                {this.state.albumArtSrc ? 
                  <AlbumArt
                    albumArtSrc={this.state.albumArtSrc}
                  /> :
                  <Dropzone
                    handleFileChange = {this.handleFile}
                  />
                }
              </div>
              <div className="upload-file-info">
                <div className="form-groups">
                  <label className="player-label">Song</label>
                  <input type="text" value={this.state.title} className='player-input'/>
                </div>
                <div className="form-groups">
                  <label className="player-label">Artist</label>
                  <input type="text" value={this.state.artist} className='player-input'/>
                </div>
                <div className="form-groups">
                  <label className="player-label">Playlist</label>
                  <input type="text" value="기본" className='player-input'/>
                  <button type="button" className='btn btn-red add-playlist'>
                    <img src={addBtnOn} className='svg'/>
                    <span>
                      Add Playlist
                    </span>
                  </button>
                </div>
                <div className="form-bottons">
                  <button type='button' className='btn btn-red'>Upload Files</button>
                  <button type='button' className='btn btn-white'>Cencel</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Player;
