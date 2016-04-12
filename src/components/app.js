import React from 'react';
import { Component } from 'react';

import AlbumList from '../containers/album_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <AlbumList />
      </div>
    );
  }
}
