import React, { Component } from 'react';
import jsmediatags from 'jsmediatags';
import Dropzone from '../components/dropzone';
import esc from '../asset/svg/esc.svg';
import addBtnOn from '../asset/svg/add-btn-on.svg';
import uploadBtn from '../asset/svg/upload-btn.svg';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      artist: '',
      musicFile: null,
    };
  }

  readMediaTag = (file) => {
    const metaTag = jsmediatags.read(file, {
      onSuccess: ({tags}) => {
        const { title, artist } = tags;
        this.setState({
          title,
          artist
        });
      },
      onError: (error) => {
        console.log(error);
      }
    });
  }

  handleFile = (file) => {
    this.readMediaTag(file);
  }

  render() {
    return (
      <div className="Upload">
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
                <img src={esc} className='esc-svg' height="27px"/>
              </div>
            </div>
            <div className="upload-form-main">
              <div className="upload-file">
                <Dropzone
                  handleFileChange = {this.handleFile}
                />
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
                  <input type="text" value="eee" className='player-input'/>
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
