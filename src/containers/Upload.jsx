import React, { Component } from 'react';
import Dropzone from '../components/dropzone';
import esc from '../asset/svg/esc.svg';
import addBtnOn from '../asset/svg/add-btn-on.svg';

class Player extends Component {
  render() {
    return (
      <div className="Upload">
        <div className="upload-form-wrapper">
          <form>
            <div className="upload-form-header">
              <div className="upload-svg-wrapper">
                <img src={esc} className='upload-svg' />
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
                <Dropzone />
              </div>
              <div className="upload-file-info">
                <div className="form-groups">
                  <label className="player-label">Song</label>
                  <input type="text" value="eee" className='player-input'/>
                </div>
                <div className="form-groups">
                  <label className="player-label">Artist</label>
                  <input type="text" value="eee" className='player-input'/>
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
