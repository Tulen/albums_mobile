import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
  constructor(props) {
    super(props)
    // Changing component level state triggers rerender
    this.state = {
      albums: []
    }

    this.renderAlbums = this.renderAlbums.bind(this);
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then( res => {
      this.setState({albums: res.data});
    })
    //fetch('https://rallycoding.herokuapp.com/api/music_albums')
    //.then((response) => response.json())
    //.then((responseData) => this.setState({albums: res.data}));
  }

  renderAlbums() {
    return this.state.albums.map((album) => {
      return (<AlbumDetail key={album.title} album={album} />)
    })
  }

  render() {

    if (this.state.albums.length === 0) {
      return(
        <ScrollView>
          <Text> Loading... </Text>
        </ScrollView>
      )
    } else {
      return(
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
      )
    }

  }
}

export default AlbumList;
