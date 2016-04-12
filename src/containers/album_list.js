import React, { Component } from 'react';
import { connect } from 'react-redux';


class AlbumList extends Component {
  renderList() {
    return this.props.albums.map((album) => {
      return (
        <li key={album.id}>{album.name}</li>
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

export default connect(mapStateToProps)(AlbumList);
