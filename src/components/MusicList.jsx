import React, { Component } from 'react';

import '../style/MusicList.css';

class MusicList extends Component {

  handleSelectMusic = (id, bitrate, title) => {
    this.props.onSelectMusic(id, bitrate, title);
  }
  render() {
    const { musicList } = this.props;
    
    return (
      <div className="music-list">
        <div className="ASP" />
        {musicList.map((music, index) => {
          return (
            <div className="music-list__item" key={index} onClick={this.handleSelectMusic(music.id, music.max_bitrate, music.title)}>
              <div className="blur" style={{backgroundImage: `url(${music.thumbnail})`}}/>
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