import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class LoadingScreen extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#000000', flex:1, height:500}}>
        <Image
          source={require('./assets/bwglogo.png')}
          style={{
            marginTop: 250,
            marginLeft:25,
            backgroundColor: '#000000'
          }}
        />
      </View>
    )
  }
}
