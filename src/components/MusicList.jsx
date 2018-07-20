import React, { Component } from 'react';

import '../style/MusicList.css';

class MusicList extends Component {
  render() {
    return (
      <div className="music-list">
      
        <div className="ASP" />
        <div className="music-list__item">
          <div className="blur"/>
          <h2>Stranded (Feat. Broods, Reggie Watts, Saro)</h2>
          <p>Flight Facilities</p>
        </div>
        <div className="music-list__item">
          <div className="blur"/>
          <h2>Stranded (Feat. Broods, Reggie Watts, Saro)</h2>
          <p>Flight Facilities</p>
        </div>
        <div className="music-list__item">
          <div className="blur"/>
          <h2>Stranded (Feat. Broods, Reggie Watts, Saro)</h2>
          <p>Flight Facilities</p>
        </div>
        <div className="music-list__item">
          <div className="blur"/>
          <h2>Stranded (Feat. Broods, Reggie Watts, Saro)</h2>
          <p>Flight Facilities</p>
        </div>
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