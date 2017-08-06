/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';


const Tut = () => {
  return(
    <View>
      <Header headerText={'Albums'}/>
      <AlbumList />
    </View>
  )
}


AppRegistry.registerComponent('Tut', () => Tut);
