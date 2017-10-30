import React from 'react';
import { StyleSheet, Text, View, WebView, Image, TouchableOpacity } from 'react-native';
import LoadingScreen from './LoadingScreen.js';
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  renderLoadingScreen() {
    return (
      <LoadingScreen/>
    )
  }

  pageLoaded = () => {
    this.setState({isLoading: false});
  }
  render() {
    const { isLoading } = this.state;
    return (
      <View style={{backgroundColor: '#000000', flex:1}}>
        {(!this.state.isLoading) ? null : <LoadingScreen />}
        <WebView
          source={{uri: 'https://www.bwgforums.com'}}
          onLoadEnd={this.pageLoaded}
          style={(isLoading) ? styles.loadingWebView : styles.noneLoading}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadingWebView: {
    flex: 1,
    marginTop: 20,
    height: 0,
    width: 0
  },
  noneLoading: {
    marginTop: 20
  },
  topBarText: {
    color: '#ffffff'
  }
});
