import React, { Component } from 'react';
import { connect } from 'react-redux';

class AlbumPhotos extends Component {
  render() {
    console.log(this.props);
    if (!this.props.album) {
      return <div>Select an album to get started.</div>
    }
    return (
      <div>
        <div>Album Photos</div>
        <div>{this.props.album.name}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    album: state.activeAlbum
  }
}

export default connect(mapStateToProps)(AlbumPhotos);
