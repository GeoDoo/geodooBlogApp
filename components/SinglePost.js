import React, { Component } from 'react';
import {
  StyleSheet,
  WebView,
  View
} from 'react-native';

class SinglePost extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  });

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

export default SinglePost;