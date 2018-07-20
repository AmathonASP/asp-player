import React, { Component } from 'react';

class Player extends Component {
  render() {
    return (
      <div className="Player">
        <div className="main-player-wrapper">
          <div className="main-player">
            <div className="player-album-image">
              <img className="album-image"/>
  
            </div>
            <div className="player-song-info">
            </div>
            <div className="player-control">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
