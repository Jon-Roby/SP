import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectAlbum } from '../actions/index';
import { bindActionCreators } from 'redux';


class AlbumList extends Component {
  renderList() {
    return this.props.albums.map((album) => {
      return (
        <li
          key={album.id}
          onClick={() => {this.props.selectAlbum(album)}}>
          {album.name}</li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    albums: state.albums
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectAlbum: selectAlbum }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
