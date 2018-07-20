import React, { Component } from 'react';
import Header from '../components/Header';
import albumArt from '../assets/img/album-cover-copy.png';

class Player extends Component {

  render() {
    const { now } = this.props;
    return (
      <div className="Player">
        <Header style={{backgroundColor: 'inherit'}} page="player"/>
        <div className="container">
          <div className="wrapper">
            <div className="main-player-wrapper">
              <div className="main-player">
                <div className="player-album-image">
                  <img className="album-art" src={albumArt}/>
                </div>
                <div className="player-song-info">
                  <div className="title">
                    Standard (Feat. Broods, Reggie Watts, Saro)
                  </div>
                  <div className="artist">
                    Flight Facilities
                  </div>
                </div>
                <div className="play-status-bar__player">
                  <ul className="play-status-bar__controls">
                    <li className="repeat off" />
                    <li className="backward" />
                    { now.status === "pause" || now.status === "stop" ? 
                      <li className="control play" onClick={this.handleTogglePlay}/>
                      :
                      <li className="control pause" onClick={this.handleTogglePlay}/>
                    }
                    <li className="forward" />
                    <li className="random off" />
                  </ul>
                </div>
                <div className='bar'>
                  <div className='progress'>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
