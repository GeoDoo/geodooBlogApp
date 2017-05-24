import React, { Component } from 'react';
import {
  StyleSheet,
  WebView,
  View
} from 'react-native';

export default class SinglePost extends Component {
  static navigationOptions = {
    title: 'Single post'
  };  

  componentDidMount() {
    console.log(this.props.navigation.state.params.url)
  }

  render() {
    return (
      <WebView 
        source={{uri: this.props.navigation.state.params.url}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});