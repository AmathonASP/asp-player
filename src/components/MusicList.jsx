import React, { Component } from 'react';

import '../style/MusicList.css';

class MusicList extends Component {

  render() {
    const { musicList } = this.props;
    
    return (
      <div className="music-list">
        <div className="ASP" />
        {musicList.map((music) => {
          return (
            <div className="music-list__item" style={{backgroundImage: `url(${music.thumbnail})`}}>
              <div className="blur"/>
              <h2>{music.title}</h2>
              <p>{music.artist}</p>
            </div>
          );
        })}
        <svg>
          <defs>
            <filter id="blur">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs> 
        </svg>
      </div>
    );
  }
}

export default MusicList;