import React from 'react';
import { Component } from 'react';

import AlbumList from '../containers/album_list';
import AlbumPhotos from '../containers/album_photos';
import FacebookLogin from '../containers/facebook_login';

export default class App extends Component {
  render() {
    return (
      <div>
        <FacebookLogin />
        <AlbumList />
        <AlbumPhotos />
      </div>
    );
  }
}
