import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class LoadingScreen extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#000000', alignItems:'center'}}>
        <Image
          source={require('./assets/bwglogo.png')}
          style={{
            backgroundColor: '#000000',
            marginTop: 250
          }}
        />
      </View>
    )
  }
}
