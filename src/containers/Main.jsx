import React, { Component } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import MusicList from '../components/MusicList';
import PlayStatusBar from '../components/PlayStatusBar';

import '../style/Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { musicList: []};
  }

  componentDidMount() {
    this.fetchPlayList();
  }

  fetchPlayList = () => {
    console.log('fetch');
    const url = 'http://13.209.185.225/api/audios/';
    axios.get(url)
    .then(({data}) => {
      this.setState({
        musicList: data,
      });
    })
    .catch((err) => {
    })
  }
  
  render() {
    const { now } = this.props;
    
    return (
      <div className="Main">
        <Header page="main" />
        <MusicList musicList={this.state.musicList}/>
        <PlayStatusBar now={now} onTogglePlay={this.props.onTogglePlay} />
      </div>
    );
  }
}

export default Main;
