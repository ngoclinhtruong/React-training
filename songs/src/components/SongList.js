import React from 'react';
import { selectSong } from '../actions';
import { connect } from 'react-redux';

const SongList = props => {
  console.log(props);

  return props.songs.map(song => {
    return (
      <div className="item" key={song.title}>
        <div className="ui container">
          {song.title} - {song.duration}
        </div>
        <div>
          <button type="button" onClick={() => props.selectSong(song)}>
            Select
          </button>
        </div>
      </div>
    );
  });
};

const mapStateToProps = state => {
  return { songs: state.songs, selectedSong: state.selectedSong };
};

const mapDispatchToProps = { selectSong };

console.log(mapDispatchToProps);

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
