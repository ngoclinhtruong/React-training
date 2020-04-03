import React from 'react';
import { connect } from 'react-redux';

const SongDetails = props => {
  console.log(props.song);
  if (props.song) {
    return <div>{props.song.title}</div>;
  } else {
    return <div>No song selected</div>;
  }
};

const mapStateToProps = state => {
  //   console.log(state);
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
